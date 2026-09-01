const https = require('https');
const fs = require('fs');

const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TABLE = process.env.AIRTABLE_TABLE_NAME; // e.g., "Projects"
const PEOPLE_TABLE = process.env.AIRTABLE_PEOPLE_TABLE; // e.g. "People"
const PUBLICATION_TABLE = process.env.AIRTABLE_PUBLICATION_TABLE;   // ← new
const INSTITUTION_TABLE = process.env.AIRTABLE_INSTITUTION_TABLE;
const TOKEN = process.env.AIRTABLE_TOKEN;

function getJSON(apiPath) {
  return new Promise((resolve, reject) => {
    https.get(
      { hostname: 'api.airtable.com', path: apiPath, headers: { Authorization: `Bearer ${TOKEN}` } },
      res => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try { resolve(JSON.parse(body)); }
          catch (e) { reject(e); }
        });
      }
    ).on('error', reject);
  });
}

// Fetches ALL records from a table, following pagination
async function getAllRecords(table) {
  let records = [];
  let offset = null;

  do {
    let apiPath = `/v0/${BASE_ID}/${encodeURIComponent(table)}`;
    if (offset) apiPath += `?offset=${offset}`;
    const data = await getJSON(apiPath);
    if (!data.records) {
      console.error(`No records returned for ${table}:`, data);
      process.exit(1);
    }
    records = records.concat(data.records);
    offset = data.offset; // present only if there are more pages
  } while (offset);

  return records;
}

function splitTopic(topic) {
  if (!topic) return { title: '', description: '' };
  const [firstLine, ...rest] = topic.split('\n').filter(Boolean);
  return {
    title: firstLine ? firstLine.replace(/:$/, '') : '',
    description: rest.join(' ').trim()
  };
}

async function main() {
  const [projectRecords, peopleRecords, publicationRecords, institutionRecords] = await Promise.all([
    getAllRecords(TABLE),
    getAllRecords(PEOPLE_TABLE),
    getAllRecords(PUBLICATION_TABLE),
    getAllRecords(INSTITUTION_TABLE)
  ]);

  // Build a lookup: record ID -> display name
  // Adjust "Name" below to whatever the actual field is called in your People table
  const institutionById = {};
  institutionRecords.forEach(r => {
    institutionById[r.id] = r.fields.Name || r.fields['Institution'] || 'Unknown';
  });
  
  // Collect every person ID that appears as a Project Lead, across all projects
  const leadIdSet = new Set();
  projectRecords.forEach(r => {
    const leadIds = r.fields['Project Leads'] || [];
    leadIds.forEach(id => leadIdSet.add(id));
  });

  const personById = {};
  peopleRecords.forEach(r => {
    const f = r.fields;
    
    const institutionIds = f['🏫 Primary Affiliation'] || [];
    const institutionNames = institutionIds.map(id => institutionById[id] || id);

    personById[r.id] = {
      name: f.Name || f['Full Name'] || 'Unknown',
      orcid: f['🟢 ORCiD'] || null,
      institution: institutionNames[0] || null, // just take primary institution
      // Only attach email if this person is a project lead
      email: leadIdSet.has(r.id) ? (f.Email || null) : null,
      site: leadIdSet.has(r.id) ? (f.Website || null) : null
      // add any other fields you want available
    };
  });

  const records = projectRecords.map(r => {
    const f = r.fields;
    const { title, description } = splitTopic(f.Topic);
    const leadIds = f['Project Leads'] || [];
    const leadNames = leadIds.map(id => personById[id] || id);

    return {
      id: r.id,
      project: f.Project,
      mainProject: f['Main Project'],
      title,
      description,
      tagline: f.Tagline,
      type: f.Type,
      category: f.Category,
      status: f.Status,
      website: f.Website,
      labs: f.Labs || null,
      nTested: f['N tested'] || null, 
      paper: f['Paper (website)'] || null,
      leads: leadNames,
      logoPath: f['Logo Path'] || null,
      contact: f['Project Contact'],
      listservSub: f['Listserv Subscribe'],
      slack: f.Slack ? f.Slack.trim() : null,
      color: f.Color ? f.Color.trim() : null
    };
  });
  
  const typeOrder = { "Main": 0, "Spin-off": 1, "Secondary analysis": 2 };
  
  records.sort((a, b) => {
    // Primary: group by main project name
    if (a.mainProject < b.mainProject) return -1;
    if (a.mainProject > b.mainProject) return 1;
  
    // Secondary: order by type using the custom ranking
    const aOrder = typeOrder[a.type] ?? 99;
    const bOrder = typeOrder[b.type] ?? 99;
    if (aOrder !== bOrder) return aOrder - bOrder;
  
    // Tertiary: alphabetical by project name
    if (a.project < b.project) return -1;
    if (a.project > b.project) return 1;
    return 0;
  });

  fs.writeFileSync('_data/airtable.json', JSON.stringify(records, null, 2));
  console.log(`Wrote ${records.length} records to _data/airtable.json`);
  
  // Build a lookup: record ID -> display name
  // Adjust "Name" below to whatever the actual field is called in your Project table
  const projectById = {};
  projectRecords.forEach(r => {
    projectById[r.id] = r.fields.Project || r.fields['Project Name'] || 'Unknown';
  });
  
  const publications = publicationRecords.map(r => {
    const f = r.fields;
    const authorIds = f.Authors || [];  // adjust to your actual field name once confirmed
    const authorNames = authorIds.map(id => personById[id] || id);
    const projectIds = f.Project || [];  // adjust to your actual field name once confirmed
    const projectNames = projectIds.map(id => projectById[id] || id);
  
    return {
      id: r.id,
      project: projectNames,
      title: f.Title ? f.Title.trim() : null,
      authors: authorNames,
      authorsCondensed: f['Authors condensed'],
      year: f.Year || null,
      journal: f.Journal ? f.Journal.trim() : null,
      volume: f.Volume || null,
      issue: f.Issue || null, 
      pages: f.Pages || null,
      journalLink: f['Journal DOI'] || null,
      preprintLink: f['Preprint DOI'] || null,
      logoPath: f['Logo Path'] || null,
      website: f.Website,
      fullCitation: f['Full Citation']};
  });

  fs.writeFileSync('_data/publications.json', JSON.stringify(publications, null, 2));
  console.log(`Wrote ${publications.length} records to _data/publications.json`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

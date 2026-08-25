const https = require('https');
const fs = require('fs');

const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TABLE = process.env.AIRTABLE_TABLE_NAME; // e.g., "Projects"
const PEOPLE_TABLE = process.env.AIRTABLE_PEOPLE_TABLE; // e.g. "People"
const PUBLICATION_TABLE = process.env.AIRTABLE_PUBLICATION_TABLE;   // ← new
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
  const [projectRecords, peopleRecords, publicationRecords] = await Promise.all([
    getAllRecords(TABLE),
    getAllRecords(PEOPLE_TABLE),
    getAllRecords(PUBLICATION_TABLE)
  ]);

  // Build a lookup: record ID -> display name
  // Adjust "Name" below to whatever the actual field is called in your People table
  const nameById = {};
  peopleRecords.forEach(r => {
    nameById[r.id] = r.fields.Name || r.fields['Full Name'] || 'Unknown';
  });

  const records = projectRecords.map(r => {
    const f = r.fields;
    const { title, description } = splitTopic(f.Topic);
    const leadIds = f['Project Leads'] || [];
    const leadNames = leadIds.map(id => nameById[id] || id);

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
      leads: leadNames,
      logoPath: f['Logo Path'] || null,
      contact: f['Project Contact'],
      listservSub: f['Listserv Subscribe'],
      slack: f.Slack
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
  
  const publications = publicationRecords.map(r => {
    const f = r.fields;
    const authorIds = f.Authors || [];  // adjust to your actual field name once confirmed
    const authorNames = authorIds.map(id => nameById[id] || id);
  
    return {
      id: r.id,
      title: f.Title || null,
      authors: f.Authors || null,
      year: f.Year || null,
      journalLink: f['Journal DOI'] || null,
      preprintLink: f['Preprint DOI'] || null
    };
  });

  fs.writeFileSync('_data/publications.json', JSON.stringify(publications, null, 2));
  console.log(`Wrote ${publications.length} records to _data/publications.json`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});

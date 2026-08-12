
const https = require('https');
const fs = require('fs');

const BASE_ID = process.env.AIRTABLE_BASE_ID;
const TABLE = process.env.AIRTABLE_TABLE_NAME;
const TOKEN = process.env.AIRTABLE_TOKEN;

function getJSON(apiPath) {
  return new Promise((resolve, reject) => {
    https.get(
      { hostname: 'api.airtable.com', path: apiPath, headers: { Authorization: `Bearer ${TOKEN}` } },
      res => {
        let body = '';
        res.on('data', chunk => body += chunk);
        res.on('end', () => {
          try {
            resolve(JSON.parse(body));
          } catch (e) {
            reject(e);
          }
        });
      }
    ).on('error', reject);
  });
}

// Splits "MB1:\nInfant-Directed Speech Preference" into title + description
function splitTopic(topic) {
  if (!topic) return { title: '', description: '' };
  const [firstLine, ...rest] = topic.split('\n').filter(Boolean);
  return {
    title: firstLine ? firstLine.replace(/:$/, '') : '',
    description: rest.join(' ').trim()
  };
}

async function main() {
  const apiPath = `/v0/${BASE_ID}/${encodeURIComponent(TABLE)}`;
  const data = await getJSON(apiPath);

  if (!data.records) {
    console.error('No records returned. Response was:', data);
    process.exit(1);
  }

  const records = data.records.map(r => {
    const f = r.fields;
    const { title, description } = splitTopic(f.Topic);

    return {
      id: r.id,
      project: f.Project,
      title,
      description,
      type: f.Type,
      status: f.Status,
      website: f['Project Website'],
      leads: f['Project Leads'],
      logo: f.Logo || null   // plain text path, e.g. /assets/img/logos/mb1.png
    };
  });

  fs.writeFileSync('_data/airtable.json', JSON.stringify(records, null, 2));
  console.log(`Wrote ${records.length} records to _data/airtable.json`);
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
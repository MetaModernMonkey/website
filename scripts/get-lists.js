#!/usr/bin/env node
const https = require('https');
require('dotenv').config();

const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;

if (!API_KEY) {
  console.error('Error: EMAIL_OCTOPUS_API_KEY not found in .env file');
  process.exit(1);
}

// v2 API uses Bearer auth
const options = {
  hostname: 'api.emailoctopus.com',
  path: '/lists',
  method: 'GET',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
  },
};

const req = https.request(options, (res) => {
  let data = '';

  res.on('data', (chunk) => {
    data += chunk;
  });

  res.on('end', () => {
    console.log('Status:', res.statusCode);
    console.log('');
    try {
      const parsed = JSON.parse(data);
      if (parsed.data && Array.isArray(parsed.data)) {
        console.log('Your lists:');
        parsed.data.forEach((list) => {
          console.log(`\nName: ${list.name}`);
          console.log(`ID: ${list.id}`);
          console.log(`Contacts: ${list.counts?.subscribed || 0}`);
        });
      } else {
        console.log(JSON.stringify(parsed, null, 2));
      }
    } catch (e) {
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.end();

#!/usr/bin/env node
const https = require('https');
require('dotenv').config();

const API_KEY = process.env.EMAIL_OCTOPUS_API_KEY;
const LIST_ID = process.env.EMAIL_OCTOPUS_LIST_ID;
const TEST_EMAIL = 'test@example.com';

if (!API_KEY || !LIST_ID) {
  console.error('Error: EMAIL_OCTOPUS_API_KEY and EMAIL_OCTOPUS_LIST_ID must be set in .env file');
  process.exit(1);
}

const payload = JSON.stringify({
  email_address: TEST_EMAIL,
});

const options = {
  hostname: 'api.emailoctopus.com',
  path: `/lists/${LIST_ID}/contacts`,
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${API_KEY}`,
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(payload),
  },
};

console.log('Testing subscription to list:', LIST_ID);
console.log('Test email:', TEST_EMAIL);
console.log('Endpoint:', `https://${options.hostname}${options.path}`);
console.log('');

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
      console.log('Response:', JSON.stringify(parsed, null, 2));
    } catch (e) {
      console.log('Raw response:', data);
    }
  });
});

req.on('error', (error) => {
  console.error('Error:', error);
});

req.write(payload);
req.end();

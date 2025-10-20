#!/usr/bin/env node

/**
 * Test script for telegram-notify backend function
 * Usage: node test-telegram-notify.js
 */

const https = require('https');
const http = require('http');

const FUNCTION_URL = 'https://functions.poehali.dev/49fd8cf9-7011-40b3-b464-b25be639eb3a';

const testData = {
  name: "Test User",
  phone: "+7 999 123 4567",
  message: "Test message"
};

console.log('🚀 Testing telegram-notify function...');
console.log('📍 URL:', FUNCTION_URL);
console.log('📦 Payload:', JSON.stringify(testData, null, 2));
console.log('\n' + '='.repeat(80) + '\n');

const url = new URL(FUNCTION_URL);
const postData = JSON.stringify(testData);

const options = {
  hostname: url.hostname,
  port: url.port || 443,
  path: url.pathname + url.search,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    'Content-Length': Buffer.byteLength(postData)
  }
};

const protocol = url.protocol === 'https:' ? https : http;

const req = protocol.request(options, (res) => {
  console.log('📊 RESPONSE STATUS:', res.statusCode);
  console.log('📋 RESPONSE HEADERS:');
  console.log(JSON.stringify(res.headers, null, 2));
  console.log('\n' + '-'.repeat(80) + '\n');

  let responseBody = '';

  res.on('data', (chunk) => {
    responseBody += chunk;
  });

  res.on('end', () => {
    console.log('📄 RESPONSE BODY:');
    try {
      const jsonBody = JSON.parse(responseBody);
      console.log(JSON.stringify(jsonBody, null, 2));
    } catch (e) {
      console.log(responseBody);
    }
    console.log('\n' + '='.repeat(80) + '\n');

    if (res.statusCode >= 200 && res.statusCode < 300) {
      console.log('✅ Request successful!');
    } else {
      console.log('❌ Request failed with status:', res.statusCode);
    }
  });
});

req.on('error', (error) => {
  console.error('❌ REQUEST ERROR:');
  console.error(error);
});

req.write(postData);
req.end();

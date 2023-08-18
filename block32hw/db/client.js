const { Client } = require('pg');

const connectionString = process.env.pg_conn || 'https://localhost:5432/gamestore';

const client = new Client({
  connectionString,
  ssl: process.env.NODE_ENV === 'production' ? { rejectUnauthorized: false } : undefined,
});

module.exports = client;
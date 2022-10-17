// HERE WE SEND SQL CODE TO DATABASE WE ARE CONNECTED TO

// Load SQL code
const fs = require('fs');
require('dotenv').config();

const sql = fs.readFileSync('setup.sql').toString();

// Import database
const db = require('./db');

// Run query to send SQL code to database
db.query(sql)
    .then(data => console.log('Set up complete'))
    .catch(error => console.log(error))

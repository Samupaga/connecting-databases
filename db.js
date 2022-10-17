// Pool allows for connections to be managed automatically
const { Pool } = require('pg');


// connects to database, requires DB_URL string
const db = new Pool({
    connectionString: process.env.DB_URL
})

module.exports = db;

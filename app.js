const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();

// Add middleware
app.use(express.json());
app.use(cors());

// Add routes
app.get('/', (req, res) => {
    res.send("Welcome to the Wrongs API")
});


app.get('/wrongs', async (req, res) => {
    const data = await db.query('SELECT * FROM wrong;')
    res.send(data.rows[0]);
})


app.get('/people/:id', async (req, res) => {
    const id = parseInt(req.params.id); 

    // select specific person based on id
    const data = await db.query("SELECT * FROM person WHERE person_id = $1", [id]) // this code for parametrization
    res.send(data.rows)
    // below code allows for SQL injection
    // const data = await db.query(`SELECT * FROM person WHERE person_id = ${id}`)
})

module.exports = app;

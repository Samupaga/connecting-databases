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
    res.send(data.rows);
})


app.get('/people', async (req, res) => {
    const data = await db.query('SELECT * FROM person;')
    res.send(data.rows)
})


app.get('/people/:id', async (req, res) => {
    const id = parseInt(req.params.id); 

    // select specific person based on id
    const data = await db.query("SELECT * FROM person WHERE person_id = $1", [id]) // this code for parametrization
    res.send(data.rows)
    // below code allows for SQL injection
    // const data = await db.query(`SELECT * FROM person WHERE person_id = ${id}`)
})


app.post('/people', async (req, res) => {
    // grab data for newPerson
    const newPerson = req.body;

    const data = await db.query('INSERT INTO person (person_name) VALUES ($1)', [Object.values(newPerson)[0]])
    // console.log(Object.values(newPerson)[0])
    console.log(data.rows)
    res.send(data.rows)
})

app.post('/wrongs', async (req, res) => {
    // grab data for newWrong
    const newWrong = req.body;

    const data = await db.query('INSERT INTO wrong (perpetrator_id, victim_id, description) VALUES ($1, $2, $3)', [Object.values(newWrong)[0], Object.values(newWrong)[1], Object.values(newWrong)[2]])

    console.log(data)
    // res.send(data.rows)
})


module.exports = app;

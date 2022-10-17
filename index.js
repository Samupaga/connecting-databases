require('dotenv').config(); // Loads environment variables
const db = require('./db')

const app = require('./app');

app.listen(process.env.PORT, () => {
    console.log(`API listening on port ${process.env.PORT}`)
});


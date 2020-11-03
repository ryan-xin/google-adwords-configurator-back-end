/* ------------ Express Server Initialization ----------- */

const express = require('express');
const app = express();

const cors = require("cors");
app.use(cors());

const bodyParser = require("body-parser");
// parse requests of content-type - application/json
app.use(bodyParser.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// Set PORT, listen for requests
const PORT = process.env.PORT || 4040;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}...`);
});

/* ---------------- MySql Initialization ---------------- */

const mysql = require('mysql');
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'database'
});
db.connect((err) => {
  if(err) {
    console.log(err);
  } else {
    console.log('Database is connected.');
  }
});

/* ----------------------- Routes ----------------------- */

// Testing route
app.get('/', (req, res) => {
  res.json({message: 'Welcome to Google AdWords Configurator!'});
});

// Read Settings
app.get('/settings', (req, res) => {
  
});

// Update Settings
app.post('/settings/update', (req, res) => {
  
});


/* ------------ Express Server Initialization ----------- */

const express = require('express');
const server = express();

const PORT = 1337;
server.listen(PORT, () => {
  console.log(`Server listening o port ${PORT}...`);
});

/* ----------------------- Routes ----------------------- */

server.get('/', (req, res) => {
  res.json({message: 'Welcome to Google AdWords Configurator!'});
});
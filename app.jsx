const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = 3000;

const name = process.env.MY_NAME;
const city = process.env.MY_CITY;
const language = process.env.MY_LANGUAGE;

app.get('/', (req, res) => {
  res.send(`I am ${name}, wilder in ${city}, and I love ${language}.`);
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

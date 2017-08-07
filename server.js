/*jshint esversion: 6*/
const express = require('express');
const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('smoke test');
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
/*jshint esversion: 6*/
const express = require('express');
const app = express();

let PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/api/movies', (req, res) => {
 let movies = [
    { title: 'Star Wars', year: 1977 },
    { title: 'Dark Tower', year: 2017 },
    { title: 'Star Trek', year: 1979 },
    { title: 'Guyver', year: 1995 },
    { title: 'Return of the Jedi', year: 1983 }
  ];
 return res.json(movies);
});

app.listen(PORT, () => {
  console.log(`server running on ${PORT}`);
});
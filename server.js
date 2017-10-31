const PORT = process.env.PORT || 3000

const express = require('express');

var app = express();

app.get('/', (req, res) => {
  res.send('Hello Express!');
});

app.listen(PORT);
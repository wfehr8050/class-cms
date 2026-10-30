const express = require('express');

const app = express();
const PORT = 3000;

app.get('/', (req, res) => {
  res.send('<h1>Will i change?</h1>');
});

app.get('/about', (req, res) => {
  res.send('<h1>About the test route</h1>');
});

app.listen(PORT, () => {
  console.log('Server is running on http://localhost:' + PORT);
});
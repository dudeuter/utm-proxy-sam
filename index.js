const express = require('express');

const app = express();
const PORT = 3000;

const course = 'localhost:3001';
const checkout = 'localhost:3002';
const feedback = 'localhost:3003';

app.use('/course/', (req, res) => {
  console.log('hit');
  res.end();
});

app.use('/checkout/', (req, res) => {
  console.log('hit');
  res.end();
});

app.use('/feedback/', (req, res) => {
  console.log('hit');
  res.end();
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`server listening on port ${PORT}`);
});

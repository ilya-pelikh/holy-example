const express = require('express');
const path = require('path');
const morgan = require('morgan');
// const { writeFileSync } = require('fs');

const app = express();
const port = 3000;

app.use(morgan('combined'));

app.use(express.static('public/static'));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.post('/policy-report/*', req => {
  console.log(req.files);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

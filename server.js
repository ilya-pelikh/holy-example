const express = require('express');
const path = require('path');
const morgan = require('morgan');

const app = express();
const port = 5000;

app.use(morgan('combined'));
app.use(express.json());

app.use(express.static('public/static'));

app.post('/tasks/:id', (req, res) => {
  console.log('body:', req.body?.code, req.params.id);
  // логика теста типа eval('...')
  if (true) {
    const taskId = Number(req.params.id);
    res.setHeader('Location', `http://localhost:3000/tasks/${taskId + 1}`);
  }
  res.status(301).send();
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

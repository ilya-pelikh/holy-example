const express = require('express');
const path = require('path');
const morgan = require('morgan');
const axios = require('axios');
const { createLogger } = require('../logger');

const port = 3000;
const ACCEPT_TOKEN = 'secret_token';

const app = express();
const logger = createLogger('main');

app.use(morgan('combined'));
app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../../public/static')));

app.post('/tasks/:id', async (req, res) => {
  logger({ id: 1, body: req.body, params: req.params });

  if (!req.body?.code) return;

  try {
    const postData = [
      'http://localhost:3001/',
      { code: req.body.code, id: req.params.id },
      { headers: { 'Accept-Token': ACCEPT_TOKEN } },
    ];

    logger({ id: 2, postData });

    const {
      data: { result },
    } = await axios.post(...postData);

    logger({ id: 3, result });

    if (result) {
      const taskId = Number(req.params.id);
      const header = ['Location', `http://localhost:3000/tasks/${taskId + 1}`];
      res.setHeader(...header);
      logger({ id: 4, header });
    }

    logger({ id: 5, status: 301 });
    res.status(301).send();
  } catch (err) {
    logger({ id: 6, status: 400, err: err.response.data });

    console.log(err);

    res.status(400).send('Неправильно');
  }
});
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

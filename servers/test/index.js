const express = require('express');
const fs = require('fs');
const path = require('path');
const { Isolate } = require('isolated-vm');
const { createLogger } = require('../logger');

const MEMORY_LIMIT = 64;
const RUNTIME_TIMEOUT = 5000;
const ACCEPT_TOKEN = 'secret_token';

const app = express();
const port = 3001;

app.use(express.json());
const logger = createLogger('test');

const ACCEPTED_IDS = ['1'];

app.post('*', async (req, res) => {
  logger({ id: 1, req: req.body, headers: req.headers });

  const hasToken = req.headers['accept-token'] === ACCEPT_TOKEN;
  const hasAcceptedTestId = ACCEPTED_IDS.includes(req.body.id);

  if (!hasToken || !hasAcceptedTestId) {
    logger({ id: 2, status: 403 });
    return res.status(403).send();
  }

  const file = fs.readFileSync(path.resolve(__dirname, `./tests/${req.body.id}.js`), 'utf8');

  logger({ id: 3, file: `./tests/${req.body.id}.js` });

  try {
    // Создаем изолированный контекст с ограничением памяти
    const isolate = new Isolate({ memoryLimit: MEMORY_LIMIT }); // Ограничение памяти до 64 MB
    const context = await isolate.createContext();

    // Получаем глобальный объект изолированного контекста
    const jail = context.global;

    // Устанавливаем глобальные переменные (опционально)
    await jail.set('global', jail.derefInto());
    // Выполняем код в изолированном контексте с ограничением времени
    const code = req.body.code + file;

    const result = await context.eval(code, { timeout: RUNTIME_TIMEOUT });

    logger({ id: 4, status: 200, result });

    // Возвращаем результат
    res.status(200).json({ result }).send();
  } catch (error) {
    // Обрабатываем ошибки
    logger({ id: 5, status: 400, message: error.message });

    res.status(400).json({ error: error.message }).send();
  }
});

app.listen(port, () => {
  console.log(`Test server: ${port}`);
});

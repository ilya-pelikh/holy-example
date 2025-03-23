const cors = require('cors');
const axios = require('axios');
const morgan = require('morgan');
const express = require('express');

const { createLogger } = require('../utils/logger');

const { errors, infoMessages } = require('./constants')

const port = 3000;
const ACCEPT_TOKEN = 'secret_token';

const app = express();
const logger = createLogger('main');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

app.post('/tasks/:id', async (req, res) => {
    logger({ id: 'MI1', description: infoMessages.MI1(), requestBody: req.body });

    try {
        if (!req.body?.code) {
            throw 'ME1'
        }

        const postData = [
            'http://localhost:3001/',
            { code: req.body.code, id: req.params.id },
            { headers: { 'Accept-Token': ACCEPT_TOKEN } },
        ];
        const { data: { result } } = await axios.post(...postData);
        logger({ id: 'MI2', description: infoMessages.TI2, result });

        if (result) {
            res.status(200).send('Этап успешно завершён');
        } else {
            logger({ id: 'ME2', description: errors.ME2(), status: 200 });
            res.status(200).send('Попытка не удалась, попробуйте еще раз');
        }
    } catch (error) {
        switch (error) {
            case 'ME1':
                logger({ id: 'ME1', description: errors.ME1(), status: 400 });
                res.status(400).json({ error: 'Ошибка № ME2 - обратитесь к сопровождающему стенда' }).send();
                break;
        }
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

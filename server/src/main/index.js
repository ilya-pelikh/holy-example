const cors = require('cors');
const morgan = require('morgan');
const express = require('express');

const { createLogger } = require('../utils/logger');

const { errors, infoMessages } = require('./constants');
const { submitCode, getSuites } = require('./services');

const port = 3001;

const app = express();
const logger = createLogger('main');

app.use(cors());
app.use(morgan('combined'));
app.use(express.json());

const HIDDEN_TEST_COUNT = 3;

app.get('/tasks/suite', async (req, res) => {
    try {
        const suites = await getSuites();
        res.status(200).send({ suites });
    } catch (error) {
        console.error('Error fetching suites:', error);
        logger({ id: 'ME1', description: errors.ME1(), status: 400 });
        res.status(400).json({ error: 'Ошибка № ME2 - обратитесь к сопровождающему стенда' }).send();
    }
});

app.post('/tasks/:id', async (req, res) => {
    logger({ id: 'MI1', description: infoMessages.MI1(), requestBody: req.body });

    try {
        if (!req.body?.code) {
            throw 'ME1'
        }

        const response = await submitCode(req.body.code, req.params.id);
        logger({ id: 'MI2', description: infoMessages.TI2, response });

        if (response.result) {
            res.status(200).send({
                message: 'Этап успешно завершён',
                result: response.result,
            });
        } else {
            logger({ id: 'ME2', description: errors.ME2(), status: 200 });
            res.status(200).send({
                message: 'Попытка не удалась, попробуйте еще раз',
                result: response.result,
                wrongTestNumber: response.wrongTestNumber,
                expected: response.wrongTestNumber > HIDDEN_TEST_COUNT ? null : response.expected,
                received: response.wrongTestNumber > HIDDEN_TEST_COUNT ? null : response.received,
                testsCount: response.testsCount,
            });
        }
    } catch (error) {
        switch (error.errorCode) {
            case 'ME1':
                logger({ id: 'ME1', description: errors.ME1(), status: 400 });
                res.status(400).json({ error: 'Ошибка № ME2 - обратитесь к сопровождающему стенда', details: error.details }).send();
                break;
        }
    }
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

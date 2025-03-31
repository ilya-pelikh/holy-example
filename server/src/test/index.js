const fs = require('fs');
const path = require('path');
const cors = require('cors');
const express = require('express');
const { Isolate } = require('isolated-vm');

const testCaseLogger = require('../utils/testCaseLogger');
const { createLogger } = require('../utils/logger');

const { errors, infoMessages } = require('./constants');
const testAll = require('./utils/testAll');

const TASK_SUITES_COUNT = 5;
const MEMORY_LIMIT = 64;
const RUNTIME_TIMEOUT = 5000;
const ACCEPT_TOKEN = 'secret_token';

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
const logger = createLogger('test');

const ACCEPTED_IDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

/**
 * Выполнение теста с добавленным кодом решения пользователя с возвратом результата
 * @param {string} reqBodyCode - Код для проверки
 * @param {string} testFile - Файл с тестами
 * @returns {Promise<{ result: boolean, expected: string, received: string, wrongTestIndex: number, testsCount: number }>} - Результат проверки
 */
const testUserSolution = async (reqBodyCode, testFile) => {
    // Создаем изолированный контекст с ограничением памяти
    const isolate = new Isolate({ memoryLimit: MEMORY_LIMIT }); // Ограничение памяти до 64 MB
    const context = await isolate.createContext();

    // Получаем глобальный объект изолированного контекста
    const jail = context.global;

    // Устанавливаем глобальные переменные (опционально)
    await jail.set('global', jail.derefInto());
    // Выполняем код в изолированном контексте с ограничением времени
    const code = testAll.toString() + '\n\n' + reqBodyCode + '\n\n' + testFile;
    const response = await context.eval(code, { timeout: RUNTIME_TIMEOUT });
    const parsed = JSON.parse(response);

    return parsed;
}

app.get('/tasks/suite', async (req, res) => {
    const randomSuites = ACCEPTED_IDS.sort(() => Math.random() - 0.5).slice(0, TASK_SUITES_COUNT);

    const files = [];
    randomSuites.forEach((suite) => {
        const file = fs.readFileSync(path.resolve(__dirname, `./tasks/${suite}.js`), 'utf8');
        files.push(file);
    });

    res.status(200).send({ suites: files });
});

//
app.post('*', async (req, res) => {
    try {
        logger({ id: 'TI1', description: infoMessages.TI1(), req: req.body });

        // Запрос не прошёл проверку по токену
        if (req.headers['accept-token'] !== ACCEPT_TOKEN) {
            throw new Error('TE1')
        }

        // Переданный id задания не входит в диапазон от 1 до 15
        if (!ACCEPTED_IDS.includes(req.body.id.toString())) {
            throw 'TE2'
        }

        const file = fs.readFileSync(path.resolve(__dirname, `./tests/${req.body.id}.js`), 'utf8');
        /**
         * comparisonResult: {
         *  result: boolean,
         *  expected: string,
         *  received: string,
         *  wrongTestIndex: number,
         *  testsCount: number
         * }
         */
        const comparisonResult = await testUserSolution(req.body.code, file);

        // Логируем тест кейс
        testCaseLogger({
            taskId: req.body.id,
            userCode: req.body.code,
            result: comparisonResult.received || null,
            expectedResult: comparisonResult.expected,
        });

        // Возвращаем результат
        logger({ id: 'TI2', description: infoMessages.TI2(), result: comparisonResult, status: 200 });
        res.status(200).json({ result: comparisonResult }).send();
    } catch (error) {
        console.log('Error while testing user solution:', error);
        switch (error) {
            case 'TE1':
                logger({ id: 'TE1', description: errors.TE1(), status: 403 });
                res.status(403).json({ error: 'Ошибка № TE1 - обратитесь к сопровождающему стенда' }).send();
                break;
            case 'TE2':
                logger({ id: 'TE2', description: errors.TE2(req.body.id.toString()), status: 400 });
                res.status(400).json({ error: 'Ошибка № TE2 - обратитесь к сопровождающему стенда' }).send();
                break;
            default:
                logger({ id: 'TE3', description: errors.TE3(), catchedError: error, status: 400 });
                res.status(400).json({ error: `Ошибка № TE3 - обратитесь к сопровождающему стенда` }).send();
        }
    }
});

app.listen(port, () => {
    console.log(`Test server: ${port}`);
});

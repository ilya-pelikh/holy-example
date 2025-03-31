const fs = require('fs');
const path = require('path');
const cors = require('cors');
const express = require('express');
const { Isolate } = require('isolated-vm');

const testCaseLogger = require('../utils/testCaseLogger');
const { createLogger } = require('../utils/logger');

const { errors, infoMessages } = require('./constants')

const MEMORY_LIMIT = 64;
const RUNTIME_TIMEOUT = 5000;
const ACCEPT_TOKEN = 'secret_token';

const app = express();
const port = 3002;

app.use(cors());
app.use(express.json());
const logger = createLogger('test');

const ACCEPTED_IDS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15'];

// Выполнение теста с добавленным кодом решения пользлвателя с возвратом результата
const testUserSolution = async (reqBodyCode, testFile) => {
    // Создаем изолированный контекст с ограничением памяти
    const isolate = new Isolate({ memoryLimit: MEMORY_LIMIT }); // Ограничение памяти до 64 MB
    const context = await isolate.createContext();

    // Получаем глобальный объект изолированного контекста
    const jail = context.global;

    // Устанавливаем глобальные переменные (опционально)
    await jail.set('global', jail.derefInto());
    // Выполняем код в изолированном контексте с ограничением времени
    const code = reqBodyCode + '\n\n' + testFile;

    console.log('code', code);

    const response = await context.eval(code, { timeout: RUNTIME_TIMEOUT });
    const parsed = JSON.parse(response);

    return parsed
}

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
        const comparisonResult = await testUserSolution(req.body.code, file);

        // Логируем тест кейс
        testCaseLogger({
            taskId: req.body.id,
            userCode: req.body.code,
            result: comparisonResult.received || null,
            expectedResult: comparisonResult.expected,
        });

        // Логируем каждый тест-кейс отдельно
        if (comparisonResult && comparisonResult.testCases) {
            comparisonResult.testCases.forEach((testCase, index) => {
                testCaseLogger({
                    taskId: req.body.id,
                    testCaseNumber: index + 1,
                    userCode: req.body.code,
                    result: testCase.result,
                    expectedResult: testCase.expected
                });
            });
        }

        // Возвращаем результат
        logger({ id: 'TI2', description: infoMessages.TI2(), result: comparisonResult, status: 200 });
        res.status(200).json({ result: comparisonResult }).send();
    } catch (error) {
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

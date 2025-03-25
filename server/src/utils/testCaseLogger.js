const fs = require('fs');
const path = require('path');

const LOGS_DIR = path.join(__dirname, '../../logs/test-cases');

if (!fs.existsSync(LOGS_DIR)) {
    fs.mkdirSync(LOGS_DIR, { recursive: true });
}

const testCaseLogger = ({ taskId, userCode, result, expectedResult }) => {
    const timestamp = new Date().toISOString();
    const logEntry = {
        timestamp,
        userCode,
        result,
        expectedResult,
        passed: JSON.stringify(result) === JSON.stringify(expectedResult)
    };

    const fileName = `task-${taskId}-test.json`;
    const filePath = path.join(LOGS_DIR, fileName);

    let logs = [];
    if (fs.existsSync(filePath)) {
        const fileContent = fs.readFileSync(filePath, 'utf8');
        logs = JSON.parse(fileContent);
    }

    logs.push(logEntry);

    fs.writeFileSync(filePath, JSON.stringify(logs, null, 2));
};

module.exports = testCaseLogger; 
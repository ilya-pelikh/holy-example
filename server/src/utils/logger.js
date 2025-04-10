const fs = require('fs');
const path = require('path');
const stringify = require('json-stringify-safe');

// Создает файл server.log в main или test и записывает туда логи по процессу
const createLogger = server => content => {
    const time = new Date().toLocaleString();
    const data = time + '\n' + stringify(content, null, '\t') + '\n';
    fs.appendFile(path.resolve(__dirname, `../${server}/server.log`), data, err => {
        if (err) {
            console.error(err);
        } else {
            // done!
        }
    });
};

module.exports = {
    createLogger,
};

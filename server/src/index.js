// Безопасно управляем процессами main и test
const { spawn } = require('child_process');
const path = require('path');

const subProcesses = [];

const onMainProcessClose = () => {
    subProcesses.forEach(subProcess => {
        const { pid } = subProcess;
        process.kill(pid);
    });
};

const onChildProcessClose = () => {
    subProcesses.forEach(subProcess => {
        subProcess.on('close', code => {
            if (code) {
                process.exit();
            }
        });
    });
};

const mainProcess = spawn('node', [path.join(__dirname, 'main', 'index.js')], { stdio: 'inherit' });
subProcesses.push(mainProcess);

const testProcess = spawn('node', [path.join(__dirname, 'test', 'index.js')], { stdio: 'inherit' });
subProcesses.push(testProcess);

process.on('SIGINT', onMainProcessClose);
onChildProcessClose();

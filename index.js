const { spawn } = require('child_process');

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

const mainProcess = spawn('node', ['servers/main'], { stdio: 'inherit' });
subProcesses.push(mainProcess);

const testProcess = spawn('node', ['servers/test'], { stdio: 'inherit' });
subProcesses.push(testProcess);

process.on('SIGINT', onMainProcessClose);
onChildProcessClose();

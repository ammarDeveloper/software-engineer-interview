const { Worker } = require('worker_threads');
const path = require('path');

function runFactorial(number) {
    const worker = new Worker(path.resolve(__dirname, './factorial_worker.js'), {
        workerData: { number }
    });

    worker.on('message', (e) => {
        console.log(e)
    });
    worker.on('error', (e) => {
        console.error(e)
    });
}

runFactorial(10);

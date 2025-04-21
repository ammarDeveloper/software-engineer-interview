const { parentPort, workerData } = require('worker_threads');

function calculateFactorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return calculateFactorial(n - 1) * n;
}

console.log(calculateFactorial(10));
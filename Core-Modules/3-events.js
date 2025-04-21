const EventEmitter = require('events');

const myEvent = new EventEmitter();

myEvent.on('data', (arg1, arg2) => {
    try {
        console.log(`This is when my data event is triggered and i have the following arguments ${arg1} ${arg2.message}`);
    } catch (error) {
        myEvent.emit('error', error)
    }
});


myEvent.on('error', (err) => {
    console.log(`Something went wrong here ${err.message}`);
})

myEvent.emit('data', 1, undefined);
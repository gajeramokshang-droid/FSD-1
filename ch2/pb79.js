// Write a node.js script to create two listeners for a common event call their respective callbacks. 
// Print number of events associated with an emitter. Remove one of the listeners & call remaining listners again. Print number of remaining listners also.

const ps=require('fs')
const EventEmitter = require('events');

// Create an event emitter
const myEmitter = new EventEmitter();


function listenerOne() {
    console.log("Listener One executed");
}

function listenerTwo() {
    console.log("Listener Two executed");
}

myEmitter.on('myEvent', listenerOne);
myEmitter.on('myEvent', listenerTwo);


console.log("Number of listeners initially:", myEmitter.listenerCount('myEvent'));

// Emit event (both listeners will run)
myEmitter.emit('myEvent');

myEmitter.removeListener('myEvent', listenerOne);


console.log("Number of listeners after removal:", myEmitter.listenerCount('myEvent'));

myEmitter.emit('myEvent');

// - myEmitter is your event emitter object (created from EventEmitter).
// - .on() is the method used to attach a listener (a callback function) to an event.
// - 'myEvent' is just the name of the event.
// It’s a string you choose — like a label. You could call it "doorbell", "dataReceived", "errorHappened", or anything else.
// - listenerTwo is the function that will run whenever myEmitter.emit('myEvent') is called.

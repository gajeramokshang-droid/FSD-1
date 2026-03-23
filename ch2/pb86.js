// Write a Node.js program that uses the events module to do the following:Fire an event 
// "welcome" that prints "Welcome to Node.js" on the console.Fire an event "time" that prints the current system time.
// Fire an event "bye" that prints "Goodbye!".

const EventEmitter = require('events');
const ee = new EventEmitter();

ee.on("Welcome",()=>{
    console.log("Welcome to Node.js")
})

ee.on("time",()=>{
    const date=new Date().toLocaleString();
    console.log("Date is=",date)
})

ee.on("bye",()=>{
    console.log("Good bye")
})

ee.emit("Welcome");
ee.emit("time")
ee.emit("bye")
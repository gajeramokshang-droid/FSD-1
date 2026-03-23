// Write a node.js script using Event handling to perform following tasks in sequence:a) 
// Create file in it named abc.txt and enter data into it.b) Append data to that file abc.txt and print message 
// “Data Appended Successfully”.c) Read the content of the file abc.txt and print the content on http web server.d) 
// Do all the operations of File using asynchronous file system module. And Lastly print the message “All operations performed successfully” 
// on console.


const fs = require('fs');
const EventEmitter = require('events');
const ee = new EventEmitter();

ee.on("writefile", () => {
    fs.writeFile("abc.txt", "I want to marry a beautiful and faithful muslim girl", (err) => {
        if (err) throw err;
        console.log("File written successfully");
        ee.emit("appendfile");
    });
});

ee.on("appendfile", () => {
    fs.appendFile("abc.txt", " God bless you", (err) => {
        if (err) throw err;
        console.log("Data appended successfully");
        ee.emit("readfile");
    });
});

ee.on("readfile", () => {
    fs.readFile("abc.txt", 'utf-8', (err, data) => {
        if (err) throw err;
        console.log("Data read successfully:", data);
        ee.emit("final");
    });
});

ee.on("final", () => {
    console.log("All operations performed successfully");
});

ee.emit("writefile");
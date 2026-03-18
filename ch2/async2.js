// Q1. Write and Read a File Asynchronously
// Question:
// Create a file async1.txt with "Hello Async". Then read it back and print the content using callbacks.

const ps=require("fs");
ps.writeFile("async.txt","Hello Async",(err)=>{
    if(err) throw err;
    ps.readFile("async.txt","utf-8",(err1,jesus)=>{
        if(err1) throw err1;
        console.log(jesus)
    })
})
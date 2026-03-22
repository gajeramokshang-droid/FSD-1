// Write a Node.js program to CRUD operation of file management.
//  1)Create folder named "Hello". 2) Create file in it named abc.txt and enter data in to it. 3) Add more data at last in file. 4) Read data without getting buffer data at first. 
//  5) rename file 6) Delete both file and folder.

const ps=require('fs')
// ps.mkdirSync("Hello")
ps.writeFileSync("Hello/abc.txt","Jesus is King of kings")
ps.appendFileSync("Hello/abc.txt","\nHe Suffer for our sins, He died for our sins")
peter=ps.readFileSync("Hello/abc.txt",'utf-8')
console.log(peter)
ps.renameSync("Hello/abc.txt",'Hello/jesus.txt')
ps.unlinkSync("Hello/jesus.txt")
ps.rmdirSync("Hello")
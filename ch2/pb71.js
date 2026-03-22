// Write a Node.Js program to sort an interger array, where all element are available in a file separated by white space. Print sorted array elements on node.js server.
const ps=require('fs')
ps.writeFile("jesus.txt","Christ is my healer",(err)=>{
    if(err) throw err;
   ps.readFile("jesus.txt","utf-8",(err,data)=>{
    if(err) throw err;
    console.log(data)
    data1=data.split(',')
    let christ = data1.sort((a, b) => a.localeCompare(b));
        console.log("Sorted words:", christ);

   })
})
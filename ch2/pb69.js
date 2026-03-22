// Write node.js script to copy content of one file to the other file. data should be fetched from source.txt and insert to destination.txt
const ps=require('fs')
ps.writeFile("source.txt","Christ is King",(err)=>{
    if(err) throw err;
    ps.copyFile("source.txt",'destination.txt',(err1,data)=>{
        if(err1) throw err1;
        console.log(data)
    })
})

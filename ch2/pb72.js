// Write a node.js script to write contents to the file in original manner. Delete file after finishing writing
const ps=require('fs')
ps.writeFile("mary.txt","Mother of god",(err)=>{
    if(err) throw err;
    ps.readFile("mary.txt","utf-8",(err,data)=>{
        if(err) throw err;
        console.log(data)
        ps.unlink("mary.txt",(err)=>{
            if(err) throw err
        })
    })
})
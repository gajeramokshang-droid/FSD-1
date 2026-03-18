var ps=require("fs")
ps.writeFile("jesus1.txt","Blessed are you",(err)=>{
    if(err) throw err;
    console.log("Content write successfull")
    ps.copyFile("jesus1.txt","christ.txt",(err)=>{
        if(err) throw err;
        console.log("File is Copied")
    ps.readFile("christ.txt",'utf-8',(err,data1)=>{
        if(err) throw err;
        console.log(data1)
    })
    });
})
// Create a file async2.txt with "Start Log". Append "Error", "Warning", "Error". Then read the file and count how many times "Error" appears
const ps=require("fs")
ps.writeFile("async2.txt","Start log",(err)=>{
    if(err) throw err;
    ps.appendFile("async2.txt","Error\n",(err)=>{
        if(err) throw err;
        ps.appendFile("async2.txt","Warning\n",(err)=>{
            if(err) throw err;
            ps.appendFile("async2.txt","Error\n",(err)=>{
                if(err) throw err;
                ps.readFile("async2.txt","utf-8",(err,data)=>{
                    if(err) throw err;
                    const count=(data.match(/Error/g)|| []).length;
                    console.log(count)
                })
        })
        })
    })
})

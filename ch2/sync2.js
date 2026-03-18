// data from file sort the data in ascending order using sort method
// 50,-1,99,100,20,0,56,78,59

const ps=require("fs");
// ps.writeFileSync("jesus.txt","50,-1,99,100,20,0,56,78,59")
data=ps.readFileSync("jesus.txt",'utf-8')
console.log(data)

data1=data.split(',');
d=data1.sort((a,b)=>a-b)
console.log(d)
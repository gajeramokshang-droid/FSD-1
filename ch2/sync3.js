// write a node js file name test.txt containing the initial text(Exam attempt) then it should add three more lines 
// to the file
// Entry1: Pass
// Entry2:Fail
// Entry3:Pass after writing the prog must read the file and count how many times the word pass appears and if the word pass
//appears 3 or more times the prog should erase the content inside text.txt


var ps=require("fs")

ps.writeFileSync("test.txt","Exam attempt\n")

ps.appendFileSync("test.txt","Entry1: Pass\n")
ps.appendFileSync("test.txt","Entry2:Fail\n")
ps.appendFileSync("test.txt","Entry3:Pass\n")
ps.appendFileSync("test.txt","Entry3:Pass")
// ps.appendFileSync("test.txt","Entry3:Pass")

data = ps.readFileSync("test.txt","utf-8")
console.log(data)	

parts = data.split("Pass")
console.log(parts)
count=parts.length-1
console.log(count)

if(count>=3){
    ps.writeFileSync("test.txt","")
    console.log("File content erased")
}else{
 console.log("File content intact")
}
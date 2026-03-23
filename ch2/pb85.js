// Write a NodeJS program to create a file named test.txt containing the initial text "Exam attempt ". 
// Then, it should add three more lines to the file: "Entry 1: Pass", "Entry 2: Fail", and "Entry 3: Pass".After writing, 
// the program must read the file and count how many times the word "Pass" appears and if the word "Pass" appears three or more times, 
// the program should erase the content inside test.txt.

const ps=require('fs')
ps.writeFileSync("test.txt","Exam Attempt\n")
ps.appendFileSync("test.txt","Entry 1: Pass\n")
ps.appendFileSync("test.txt","Entry 2: Pass\n")
ps.appendFileSync("test.txt",'Entry 3: Pass')
jesus=ps.readFileSync('test.txt','utf-8')
console.log(jesus)
const count=(jesus.match(/Pass/g)).length;
console.log(count)
if(count>=3){
    ps.writeFileSync("test.txt","")
    console.log("File content erased because 'Pass' appeared 3 or more times.");
}

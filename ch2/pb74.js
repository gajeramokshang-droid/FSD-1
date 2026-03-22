// Write a node.js script to write the text “This is data” to new.txt file. After that append the text “That is data” to same new.txt file. 
// After that read the file & print the file content on console. After finishing read operation print the line “Thank you for using program”. Write, 
// append & read sequence must be maintained & all operations are synchronous.

const ps=require('fs')
ps.writeFileSync("new.txt",'This is data')
ps.appendFileSync("new.txt",'\nThat is data')
console.log(ps.readFileSync("new.txt").toString())
console.log("Thank U for using prog")

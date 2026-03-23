// Write a nodeJS script to fire an event named calculate which calculates the total marks of 5 subjects about of 25 marks 
// and displays the total marks on console as an output.The calculate event fires another event name percentage which takes total marks as 
// argument and percentage should get displayed in console

const eventhandler=require('events')
const ee=new eventhandler()

jesus=ee.on("calculate",(m1,m2,m3,m4,m5)=>{
    total=m1+m2+m3+m4+m5
    console.log(total,'out of 25 marks')
})

ee.on("percentage",(total)=>{
    percen=(total/125)*100;
    console.log(percen)
})

ee.emit("calculate",20, 22, 23, 24, 25)
ee.emit("percentage",total)

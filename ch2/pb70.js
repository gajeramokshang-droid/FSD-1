// Write a program to demonstrate various methods of path module in Node.js.

const path=require('path')
const jesus='/document/jesus/christ.txt'
console.log(path.basename(jesus))
console.log(path.dirname(jesus))
console.log(path.extname(jesus))
console.log(path.resolve('christ.txt'))
console.log(path.join("/documents,jesus,christ.txt"))
console.log(path.normalize(jesus))
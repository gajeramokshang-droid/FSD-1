// Create a file log.txt with "Start Log". Append three lines: "Error", "Warning", "Error". Then read the file and count how many times "Error" appears

const fs = require("fs");

fs.writeFileSync("log.txt", "Start Log\n");
fs.appendFileSync("log.txt", "Error\n");
fs.appendFileSync("log.txt", "Warning\n");
fs.appendFileSync("log.txt", "Error\n");

const data = fs.readFileSync("log.txt", "utf-8");
const count = (data.match(/Error/g) || []).length;
console.log("Error count:", count);

 
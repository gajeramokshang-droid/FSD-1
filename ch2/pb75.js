// Write a Node.Js program for following action   1.Write a file having five random elements separated by white space in .txt file.2.
// 	append sorted array of these 5 elements in same file along with message : “Sorted array:” in new line.3.	
//     Find maximum number from that and append with message “maximum number=” in same file.

const fs = require('fs');

// Step 1: Generate 5 random numbers
let arr = [];
for (let i = 0; i < 5; i++) {
    arr.push(Math.floor(Math.random() * 100)); // random numbers 0–99
}

// Write them to file separated by space
fs.writeFileSync("output.txt", arr.join(" "), "utf8");

// Step 2: Sort the array
let sortedArr = [...arr].sort((a, b) => a - b);

// Append sorted array with message
fs.appendFileSync("output.txt", "\nSorted array: " + sortedArr.join(" "), "utf8");

// Step 3: Find maximum number
let max = Math.max(...arr);

// Append maximum number with message
fs.appendFileSync("output.txt", "\nMaximum number = " + max, "utf8");

console.log("File operations completed successfully.");
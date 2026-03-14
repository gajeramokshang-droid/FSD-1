const fs = require('fs');

let data = "50 -1 99 100 0 56 78 59";
let arr = data.split(" ").map(Number);

let max = Math.max(...arr);

console.log("Array:", arr);
console.log("Maximum:", max);

fs.writeFile("data.txt", arr.join(" "), (err) => {
    if (err) throw err;
    console.log("Data written to data.txt");
});


// - fs.writeFile → Asynchronously writes data to a file.
// - "data.txt" → The name of the file you’re writing to. If it doesn’t exist, Node.js will create it.
// - arr.join(" ") → Converts your array into a string, with spaces between elements (e.g. "50 -1 99 100 0 56 78 59").
// - Callback (err) => { ... } → Runs after the write finishes:
// - If there’s an error, throw err stops the program and shows the error.
// - If successful, it prints "Data written to data.txt" in the console.

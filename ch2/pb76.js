// Write a function 'ArrayToObject' which takes in an array of arrays, and returns an object with each pair of elements in the array as a key-value pair and store the 
// result in one arraytoobject.txt file.
// Input=[['Country', India'], ['State', 'Gujarat'], ['City', ‘Ahmedabad’]]Output= { Country : ' India ', State : ' Gujarat ', City : ‘Ahmedabad’ }

const fs = require('fs');

function ArrayToObject(arr) {
    let obj = {};
    arr.forEach(pair => {
        let [key, value] = pair;
        obj[key] = value;
    });
    return obj;
}

// Example input
let input = [['Country', 'India'], ['State', 'Gujarat'], ['City', 'Ahmedabad']];

// Convert array to object
let output = ArrayToObject(input);

// Write result to file
fs.writeFileSync('arraytoobject.txt', JSON.stringify(output, null, 2));

console.log("Object saved to arraytoobject.txt");


// Write a node.js script using event handling to consider an errorneous triangle to find area. Take fix values of all three sides. 
// (1) If any of the side is negative, then print the message “Sides must be positive” using event handler. 
// (2) If perimeter of triangle is negative then print the message “Perimeter must be positive” using event handler.
// (3) Both above messages must be printed in sequence.

const fs = require('fs');

fs.writeFile("jesus.txt","",(err) => {
    if (err) {
        console.error("Error writing file:", err); 
        return; 
    }
    console.log("jesus.txt created successfully!");

    function joshuaperimeter(a, b, c) {
        if (a < 0 || b < 0 || c < 0) {
            console.log("Side must be positive");
            return; 
        }
        let perimeter = a + b + c;
        if (perimeter < 0) { 
        } else {
            console.log("Perimeter:", perimeter);
        }
    }

    function area(b, h) {
        if (b < 0 || h < 0) {
            console.log("Base and height must be positive✝️✝️"); 
            return; // Exit function if input is invalid
        } else {
            let calculatedArea = (1 / 2 * (b * h)); 
            if (calculatedArea < 0) { 
                console.log("Area must be positive✝️✝️");
            }
            console.log("Area:", calculatedArea);
        }
    }
    console.log("\n--- Testing joshuaperimeter ---");
    joshuaperimeter(3, 4, 5);   
    joshuaperimeter(10, 20, 30); 
    joshuaperimeter(-1, 2, 3);   

    console.log("\n--- Testing area ---");
    area(10, 5);     
    area(7, 8);      
    area(-5, 10);   
});
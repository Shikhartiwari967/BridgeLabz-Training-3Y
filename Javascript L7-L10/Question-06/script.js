"use strict"; 
function generatePyramid(limit = 5) {
    // Using 'let' for block-scoped loop variables
    for (let i = 1; i <= limit; i++) {
        let row = ""; 
        for (let j = 1; j <= i; j++) {
            row += "* ";
        }
        console.log(row.trim()); // Print each level of the pyramid
    }
}

// Generate the specific 4-row pattern requested in the prompt
console.log("Generating 4-level pyramid:");
generatePyramid(4);

// Generate with the default limit of 5
console.log("\nGenerating default 5-level pyramid:");
generatePyramid();


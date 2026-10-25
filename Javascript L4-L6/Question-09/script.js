// Q9. Odd-Even Number Analyzer

// 1. Create a new array to store the results
let resultsArray = [];

// 2. Accept numbers 1-30 using a loop
for (let i = 1; i <= 30; i++) {
    let classification = "";

    // 3. Check conditions using % and conditionals
    if (i % 3 === 0 && i % 5 === 0) {
        classification = "FizzBuzz";
    } else if (i % 2 === 0) {
        classification = "Even";
    } else {
        classification = "Odd";
    }

    // Print the result for the current number
    console.log(`Number ${i}: ${classification}`);

    // 4. Store results in the new array using push()
    resultsArray.push({ number: i, type: classification }); 
}

// 5. Display the final array
console.log("\n--- Final Array of Results ---");
console.log(resultsArray);
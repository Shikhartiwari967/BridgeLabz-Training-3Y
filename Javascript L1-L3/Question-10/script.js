// Q10: Citizen Eligibility Validator

// 1. Input variables
let age = 19;             // Test with different ages
let isCitizen = true;     // Test with true or false

// 2. Evaluate eligibility using nested if-else and logical operators
if (isCitizen) {
    if (age >= 18 && age <= 20) {
        console.log("Eligible to vote only.");
    } else if (age >= 18) { 
        // This will catch ages 21 and above since 18-20 is caught above
        console.log("Eligible for all services.");
    } else {
        console.log("Not eligible yet.");
    }
} else {
    // Not a citizen
    if (age >= 18) {
        console.log("Only age criteria met.");
    } else {
        console.log("Not eligible yet.");
    }
}
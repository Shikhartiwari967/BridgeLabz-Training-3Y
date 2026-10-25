// Q3. Math Utility Dashboard

// Take a number
let x = 16.75;

// Perform math operations
let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomNum = Math.floor(Math.random() * 41) + 10;


let summary = `Math Utility Dashboard Results:
-------------------------------
Original Number : ${x}
Rounded Value   : ${roundedValue}
Square Root     : ${squareRoot}
Power (x^3)     : ${powerValue}
Random (10-50)  : ${randomNum}`;

// Display the summary
console.log(summary);
// Q8: Employee Salary Projection

// 1. Declare current salary and annual increment rate (in %)
let currentSalary = 50000; 
let incrementRate = 5; // 5% increment per year

// Array to hold the yearly data for the console table
let salaryProjection = [];

// 2. Use a for loop to compute salary for each of 5 years
for (let year = 1; year <= 5; year++) {
    
    // Calculate the increment amount
    let incrementAmount = currentSalary * (incrementRate / 100);
    
    // 3. Apply assignment operators to update the current salary
    currentSalary += incrementAmount;
    
    // 4. Apply rounding
    currentSalary = Math.round(currentSalary);
    
    // Add the yearly data to our array
    salaryProjection.push({
        Year: year,
        "Projected Salary": `$${currentSalary}`
    });
}

// 5. Print yearly salary in a formatted console table
console.table(salaryProjection);
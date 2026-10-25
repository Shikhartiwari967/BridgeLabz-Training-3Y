"use strict"; // 3. Apply strict validation

const employees = [
    { name: "Amit", salary: "45000", years: "5" },
    { name: "Sara", salary: "38000", years: "2" },
    { name: "Kiran", salary: "52000", years: "7" }
];

// Loop through each employee
employees.forEach(employee => {
    try {
        // Check for missing properties to trigger an error if necessary
        if (!employee.name || !employee.salary || !employee.years) {
            throw new Error("Missing employee data properties.");
        }

        // 1. Convert salary and years to numbers
        const salaryNum = Number(employee.salary);
        const yearsNum = Number(employee.years);

        // Validate that conversion was successful
        if (isNaN(salaryNum) || isNaN(yearsNum)) {
            throw new Error("Invalid number format for salary or years.");
        }

        // 2. Calculate bonus = (salary * 0.1) if years > 3 else (salary * 0.05)
        let bonus;
        if (yearsNum > 3) {
            bonus = salaryNum * 0.1;
        } else {
            bonus = salaryNum * 0.05;
        }

        const totalCompensation = salaryNum + bonus;

        // 4. Use template strings to print each employee’s formatted details
        console.log(`Employee: ${employee.name}`);
        console.log(`  - Salary: ₹${salaryNum}`);
        console.log(`  - Years of Service: ${yearsNum}`);
        console.log(`  - Bonus Awarded: ₹${bonus}`);
        console.log(`  - Total Compensation: ₹${totalCompensation}\n`);

    } catch (error) {
        // 5. Add try...catch to handle conversion or missing property errors
        console.error(`Error processing data for ${employee.name || "Unknown"}: ${error.message}`);
    }
});
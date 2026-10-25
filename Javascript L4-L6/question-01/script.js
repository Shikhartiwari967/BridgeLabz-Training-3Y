// Declare a global variable
let bonus = 5000;

function calculateSalary() {
    // Declare local variables inside the function scope
    let salary = 40000;
    let isPermanent = true; // Change this to false to test the other condition
    
    let totalSalary = salary;

    // Logic to add bonus based on the local boolean variable
    if (isPermanent) {
        totalSalary += bonus; // Accesses the global variable 'bonus'
        console.log("Employee is permanent. Total Salary: $" + totalSalary);
    } else {
        console.log("Employee is not permanent. Total Salary: $" + totalSalary);
    }
}
calculateSalary();
console.log("Global bonus amount available: $" + bonus);
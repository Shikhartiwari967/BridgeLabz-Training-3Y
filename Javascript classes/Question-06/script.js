// Q 6: Employee Management System (Classes + Object Methods)

class Employee {
  constructor(id, name, department, monthlySalary) {
    this.id = id;
    this.name = name;
    this.department = department;
    this.monthlySalary = monthlySalary;
  }

  // Method to calculate annual salary
  getAnnualSalary() {
    return this.monthlySalary * 12;
  }

  // Method to apply a bonus percentage to the salary
  applyBonus(percent) {
    const bonusAmount = this.monthlySalary * (percent / 100);
    this.monthlySalary += bonusAmount;
    console.log(`[Bonus Applied] ${this.name} received a ${percent}% bonus. New monthly salary: $${this.monthlySalary.toFixed(2)}`);
  }
}

// Create 5 employee objects and store them in an array
const employees = [
  new Employee(1, "Alice Smith", "Engineering", 6000),
  new Employee(2, "Bob Jones", "HR", 4500),
  new Employee(3, "Charlie Brown", "Marketing", 5000),
  new Employee(4, "Diana Prince", "Sales", 5500),
  new Employee(5, "Evan Wright", "Management", 8500)
];

// Apply a bonus to a couple of employees for demonstration
employees[0].applyBonus(10); // 10% bonus for Alice
employees[4].applyBonus(15); // 15% bonus for Evan

console.log("\n--- Annual Salaries ---");
// Calculate and display the annual salary for each employee
employees.forEach(emp => {
  console.log(`${emp.name} (${emp.department}): $${emp.getAnnualSalary().toFixed(2)}`);
});

// Use reduce() to calculate the total annual payout of the company
const totalAnnualPayout = employees.reduce((accumulator, currentEmployee) => {
  return accumulator + currentEmployee.getAnnualSalary();
}, 0);

console.log(`\nTotal Annual Payout of the Company: $${totalAnnualPayout.toFixed(2)}`);
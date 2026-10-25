// Q4: Academic Performance Evaluator

// 1. Input marks of 5 subjects (use an array). 
// Assuming each subject is out of 100.
let marks = [88, 76, 92, 85, 90]; 

// Variables for calculations
let totalMarks = 0;
let hasFailedSubject = false;

// Loop through the array to calculate the total and check for failing marks
for (let i = 0; i < marks.length; i++) {
    totalMarks += marks[i];
    
    // Validation: if any subject < 35 -> automatically "Detained"
    if (marks[i] < 35) {
        hasFailedSubject = true;
    }
}

// 2. Calculate average and overall percentage.
let numberOfSubjects = marks.length;
let average = totalMarks / numberOfSubjects;
// Since each subject is out of 100, the percentage is the same as the average in this case
let percentage = (totalMarks / (numberOfSubjects * 100)) * 100; 

console.log(`Marks: ${marks.join(', ')}`);
console.log(`Percentage: ${percentage.toFixed(2)}%`);

// 3. Use logical operators to print the final result
if (hasFailedSubject) {
    console.log("Status: Detained (Scored below 35 in one or more subjects)");
} else if (percentage >= 85) {
    console.log("Status: Promoted with Distinction");
} else if (percentage >= 50 && percentage < 85) {
    console.log("Status: Promoted");
} else {
    console.log("Status: Detained");
}
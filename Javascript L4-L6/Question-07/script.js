// Q7. Customer Feedback Processor

// 1. Store the feedback string
let feedback = "Great product! Fast delivery and amazing sound quality!";

// 2. Count words using split()
// Splitting the string by spaces to create an array of words, then finding its length
let wordsArray = feedback.split(" ");
let wordCount = wordsArray.length;

// 3. Check for specific keywords using includes()
// Converting to lowercase first to ensure case-insensitive matching
let lowerCaseFeedback = feedback.toLowerCase();
let hasBad = lowerCaseFeedback.includes("bad");
let hasPoor = lowerCaseFeedback.includes("poor");

// 4. Evaluate feedback and print results using conditional statements
console.log(`Feedback: "${feedback}"`);
console.log(`Word Count: ${wordCount}`);

if (!hasBad && !hasPoor) {
    console.log("Analysis: Positive Feedback");
} else {
    console.log("Analysis: Needs Improvement");
}
// Q6: Progressive Discount System

// 1. Input total purchase amount
let totalPurchaseAmount = 7500; 

let discountPercentage = 0;

// 2. Apply dynamic discount tiers using if-else statements
if (totalPurchaseAmount >= 10000) {
    discountPercentage = 25;
} else if (totalPurchaseAmount >= 5000) {
    discountPercentage = 15;
} else if (totalPurchaseAmount >= 2000) {
    discountPercentage = 5;
} else {
    discountPercentage = 0; // No discount
}

// 3. Calculate final price
let discountAmount = (totalPurchaseAmount * discountPercentage) / 100;
let finalPrice = totalPurchaseAmount - discountAmount;

// 4. Use Math.round() to round the final price
finalPrice = Math.round(finalPrice);

// 5. Calculate and print the required details
console.log(`Original total: $${totalPurchaseAmount}`);
console.log(`Discount applied: ${discountPercentage}%`);
console.log(`Final price after discount: $${finalPrice}`);
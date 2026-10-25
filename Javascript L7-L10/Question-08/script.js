"use strict";

// 1. Use unique parameter names
function demo(a, b) {
    // 2. Explicitly declare the variable using 'let' or 'const'
    let total = 10; 
    
    console.log(`a: ${a}, b: ${b}`);
    console.log(`Total: ${total}`);
    
    // 3. Do not use 'delete' on variables. 
    // Local variables are automatically cleaned up (garbage collected) 
    // when the function finishes execution.
}

demo(5, 10);
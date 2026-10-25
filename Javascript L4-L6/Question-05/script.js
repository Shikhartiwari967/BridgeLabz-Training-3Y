// Q5. Boolean Logic Access System

// 1. Define the variables
let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecuritySystem(doorLocked, windowClosed, alarmOn, ownerInside) {
    // 2. Use Boolean logic (&&, ||, !) to check conditions
    // Access is granted (Secure) ONLY IF all conditions are met
    let isSecure = alarmOn && (doorLocked && windowClosed) && ownerInside;
    
    // Alternatively, using || and ! to show the opposite (Unsafe) condition
    let isUnsafe = !alarmOn || !doorLocked || !windowClosed || !ownerInside;

    // 3. Print "Secure" or "Unsafe"
    if (isSecure) {
        console.log("System Status: Secure");
    } else if (isUnsafe) {
        console.log("System Status: Unsafe");
    }
}

// Test Outcome 1: All conditions met
console.log("Test 1:");
checkSecuritySystem(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside);

// Test Outcome 2: Owner is outside (false)
console.log("\nTest 2 (Owner leaves):");
isOwnerInside = false;
checkSecuritySystem(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside);

// Test Outcome 3: Alarm is off but everything else is locked/closed
console.log("\nTest 3 (Alarm off):");
isAlarmOn = false;
isOwnerInside = true;
checkSecuritySystem(isDoorLocked, isWindowClosed, isAlarmOn, isOwnerInside);
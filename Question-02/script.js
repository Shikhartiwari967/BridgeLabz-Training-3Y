// Q2: Multi-Type Data Summary

// 1. Declare variables of different data types
let userName = "John Doe";         // string
let userAge = 30;                  // number
let isActive = true;               // boolean
let userRoles = ["Admin", "User"]; // array
let userProfile = { id: 101 };     // object
let lastLogin = null;              // null
let nextUpdate = undefined;        // undefined

// 2. Create an array of objects to format the report
// Using typeof and Array.isArray() to identify each type accurately
const dataSummary = [
    { 
        Label: "User Name", 
        Value: userName, 
        Type: typeof userName 
    },
    { 
        Label: "User Age", 
        Value: userAge, 
        Type: typeof userAge 
    },
    { 
        Label: "Account Status", 
        Value: isActive, 
        Type: typeof isActive 
    },
    { 
        Label: "Roles", 
        Value: JSON.stringify(userRoles), 
        Type: Array.isArray(userRoles) ? "array" : typeof userRoles 
    },
    { 
        Label: "Profile Data", 
        Value: JSON.stringify(userProfile), 
        Type: typeof userProfile 
    },
    { 
        Label: "Last Login", 
        Value: String(lastLogin), 
        // typeof null returns "object", so we can add a specific check or just rely on typeof as requested
        Type: lastLogin === null ? "null" : typeof lastLogin 
    },
    { 
        Label: "Next Update", 
        Value: String(nextUpdate), 
        Type: typeof nextUpdate 
    }
];

// 3. Print the formatted report using one console.table() statement
console.table(dataSummary);
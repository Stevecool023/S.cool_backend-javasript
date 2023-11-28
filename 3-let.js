// Variables declared with 'let' are hoisted at the top of their block scope but they are not initialized until the declaration statement is encountered.

// console.log(y); // Output: ReferenceError: y is not defined

let y = 15;
console.log(y); // Output: 15

// Trying to access 'y' before the declaration results in an error due to the Temporal Dead Zone(TDZ)

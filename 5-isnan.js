/*
 * `isNaN` attempts to convert a number before checking for NaN
 */
console.log(isNaN('Hello')); // returns true
console.log(isNaN('123')); // returns false


// To avoid this, use `Number.isNaN` for more precise checks
console.log(Number.isNaN('Hello')); /* returns false */
console.log(Number.isNaN('123')); /* returns false */

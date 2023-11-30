/*
 * The Number.isSafeInteger() Method
 * A safe integer is an integer that can be exactly represented as a double precision number
 * This method returns true if the argument is a safe integer
 * Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
 * This is safe: 9007199254740991. This is not safe: 9007199254740992.
 */

// Example
console.log(Number.isSafeInteger(10)); // returns true
console.log(Number.isSafeInteger(12345678901234567890));  // returns false

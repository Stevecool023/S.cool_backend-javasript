function multiply(a, b = 1) {
	return a * b;
}

console.log(multiply(5, 2));
/* Expected output: 10 */

console.log(multiply(5));
/* Expected output: 5 */

console.log(multiply(5, undefined));
/* Expected output: 5 */

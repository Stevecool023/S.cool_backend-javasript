/* 
 * The find() method returns the value of the first array element
 * that passes a test function
 * The following example finds(returns the value of) the first element
 * that is larger than 18
 */

const numbers = [4, 9, 16, 26, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
	return value > 18;
}

console.log(first);

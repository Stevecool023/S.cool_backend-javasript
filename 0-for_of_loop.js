// Syntax:
// for (variable of iterable) {
// code block to be executed
// }

// Looping over an array

const cars = ["BMW", "Volvo", "Mini"];
let text = "";

for (let x of cars) {
	text += x + " ";
	// console.log(text);
}

console.log(text);

const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
	if (value > 18) {
		// You can use the index and array here
		console.log(`Found at index ${index} in the array:`, array);
		return true; // Returning true to indicate a match
	}
	return false; // Returning false if the condition is not met
}

console.log(first);

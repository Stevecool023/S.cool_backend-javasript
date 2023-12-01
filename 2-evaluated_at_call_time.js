function append(value, array = []) {
	array.push(value);
	return array;
}

console.log(append(1)); // [1]
console.log(append(2)); //[2], not [1, 2]

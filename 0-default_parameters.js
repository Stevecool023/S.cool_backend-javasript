function f(x = 1, y) {
	return [x, y];
}

console.log(f()); // [1, undefined]
console.log(f(2)); // [2, undefined]
console.log(f(3, 4)); // [3, 4]

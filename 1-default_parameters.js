function test(num = 1) {
	console.log(typeof num);
}

console.log(test()); // 'number' (num is set to 1)
console.log(test(undefined)); // 'number' (num is set to 1 too)

// test with other falsy values:
console.log(test("")); // 'string' (numb is set to '')
console.log(test(null)); // 'objects' (num is set to null)

function fun1(...theArgs) {
	console.log(theArgs.length);
}

console.log(fun1()); /* 0 */
console.log(fun1(5)); // 1
console.log(fun1(5, 6, 7)); // 3

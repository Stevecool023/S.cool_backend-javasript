const map = new Map([
	["a", 1],
	["b", 2],
	["c", 3]
]);

map.forEach((value, key) => {
	console.log(`${key}: ${value}`);
});

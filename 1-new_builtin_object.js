const houses = new Map([
	["Bungallow", 3.5],
	["Storey", 10.7],
	["Suites", 13.7],
	["Apartment", 8.3]
]);

houses.forEach((value, key) => {
	console.log(`${key}: ${value}`)
});

// Being able to use an Object as a key is an important Map feature.

const fruits = new Map([
	["apples", 500],
	["bananas", 300],
	["oranges", 200]
]);

// Iterate over the Map and log each key-value pair
fruits.forEach((value, key) => {
	console.log(`${key}: ${value}`);
});

// Convert Map to an array of entries and log
// console.log(Array.from(fruits));

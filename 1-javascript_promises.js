const myPromise = new Promise(function(resolve, reject) {
	/* Simulating success result
	const value = "Operation successful";
	resolve(value) */

	// Simulating an error
	const error = new Error("Something went wrong");
	reject(error);
});

myPromise.then(
	function(value) {
		console.log(value); // This won't be executed in this example
	},
	function(error) {
		console.error(error.message); // Output: Something went wrong
	}
);

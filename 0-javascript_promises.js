// Promise Syntax
// const myPromise = new Promise(function(resolve, reject) {/
/* const myPromise = new Promise(function(myResolve, myReject) {
	// "Producing Code" (May take some time)
	myResolve(); // when successful
	myReject(); // when error
});

// "Consuming Code" (Must wait for a fulfilled Promise).
myPromise.then(
	function(value) { // code if successful },
	function(error) { // code if some error }
);*/

/* Example */
const myPromise = new Promise(function(resolve, reject) {
	/* Simulating a successful operation */
	const result = "Operation successful";
	resolve(result);
	/* Simulating an error
	const error = new Error("Something went wrong");
	reject(error); */
});

myPromise.then(
	function(result) {
		console.log(result);// Log result to the console
	},
	function(error) {
		console.log(error.message); // This won't be executed in this example
	}
);

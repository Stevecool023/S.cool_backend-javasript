function callSomething(thing = something()) {
	return thing;
}

let numberOfTimesCalled = 0;
function something() {
	numberOfTimesCalled += 1;
	return numberOfTimesCalled;
}

console.log(callSomething()); // 1
console.log(callSomething()); // 2
console.log(callSomething());
console.log(callSomething());
console.log(callSomething());

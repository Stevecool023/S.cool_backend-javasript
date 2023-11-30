// Syntax
// class ClassName {
// 	constructor() {...}
// }

// Example
class Car {
	constructor(name, year) {
		this.name = name;
		this.year = year;
	}
}

const myCar = new Car("Toyota", 2022);
console.log(myCar.name + ":" + " " + myCar.year);
// console.log(myCar.year);

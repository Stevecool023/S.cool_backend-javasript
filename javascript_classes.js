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

const myCar1 = new Car("Toyota", 2022);
const myCar2 = new Car("Ford", 2014);
const myCar3 = new Car("Audi", 2019);

console.log(myCar1.name + ":" + " " + myCar1.year);
console.log(myCar2.name + ":" + " " + myCar2.year);
console.log(myCar3.name + ":" + " " + myCar3.year);
// console.log(myCar.year);

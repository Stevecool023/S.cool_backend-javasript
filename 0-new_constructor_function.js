function person(name) {
	this.name = name;
}

const john = new person("John");

console.log(john.name);

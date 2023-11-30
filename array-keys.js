/* The keys() method returns an Array Iterator object with the keys of an array. */
const fruits = ["Banana", "Orange", "Apple", "Mango"];
const keys = fruits.keys();

let text = "";
for (let key of keys) {
	text += key + "<br> ";
}

console.log(text);

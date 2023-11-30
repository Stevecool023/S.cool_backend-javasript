/* Declares a class */
class polygon {
	constructor(height, width) {
		this.area = height * width;
	}
}

console.log(new polygon(4, 3).area);
/* Expected output: 12 */

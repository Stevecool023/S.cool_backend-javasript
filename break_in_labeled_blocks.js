outerBlock: {
	innerBlock: {
		console.log("1");
		break outerBlock; // breaks out of both innserBlock and outerBlock
		console.log(":-("); // skipped
		}
		console.log("2"); //skipped
}

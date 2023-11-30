block1: {
	console.log("1");
	break block2; // SyntaxError: label not found
}

block2: {
	console.log("2");
}

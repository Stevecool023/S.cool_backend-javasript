block1: {
	console.log("1");
	(() => {
		break block1; // SyntaxError: undefined label 'block1'
		})();
}

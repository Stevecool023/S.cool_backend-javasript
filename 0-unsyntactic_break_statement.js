function testBreak(x) {
	let i = 0;

	while (i < 6) {
		if (i === 3) {
			(() => {
				break;
			})();
		}
		i += 1;
	}

	return i * x;
}

testBreak(1); // SyntaxError: Illegal break statement

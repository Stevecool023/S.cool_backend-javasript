for (let i = 0; i < 3; i++) {
	setTimeout(() => {
		console.log(i); // Outputs 0, 1, 2 (not 3)
	}, 1000);
}

// Each iteration creates a new block-scoped 'i', avoiding the closure-related problem.

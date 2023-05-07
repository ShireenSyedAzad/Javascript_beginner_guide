//function scope- It doesn't work
function constscope() {
	const x = 10;
	if (true) {
		const x = 20;
		console.log(x); // Outputs 20
	}
	console.log(x); // Outputs 10
}

constscope();
//block scope
if (true) {
    const y = 20;
    console.log(y); //20
}

console.log(y); // ReferenceError: y is not defined

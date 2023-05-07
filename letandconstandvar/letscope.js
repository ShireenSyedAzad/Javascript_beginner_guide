//function scope- It doesn't work
function letscope() {
	let x = 10;
	if (true) {
		let x = 20;
		console.log(x); // Outputs 20
	}
	console.log(x); // Outputs 10
}
 
letscope();
//block scope 
if (true) {
	let y = 20;
}

console.log(y); // ReferenceError: y is not defined

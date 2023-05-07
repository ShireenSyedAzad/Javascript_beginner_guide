//function scope
function functionscope() {
    var a = 10;
    console.log(a);//10
    nested();
    function nested() {
		let b = 20;
		console.log(b);//20
		console.log(a);//10
	}

}

functionscope();

function functionscope1() {
	var x = 10;
	if (true) {
		var x = 20;
		console.log(x); // Outputs 20
	}
	console.log(x); // Outputs 20, not 10!
}
functionscope1();
//block scope - It doesn't work
if (true) {
    var y = 20;
    console.log(y); 
}

console.log(y); // Output: 20
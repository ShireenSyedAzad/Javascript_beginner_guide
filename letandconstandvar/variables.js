var a;
console.log(a);// undefined
let b;
console.log(b);// undefined
const c=10;
console.log(c);//10

getName(); // Uncaught TypeError: getName is not a function
console.log(getName);//-[Function: myFunction]
var getName = function () {
	console.log("Hello");
};
console.log(myFunction);
function myFunction() {
	console.log(x); // ReferenceError: x is not defined -Fix:Declare variable and then console it
}

myFunction();
console.log(h);//ReferenceError: h is not defined -Fix:Declare h  variable and then console
console.log(d);//undefined
var d;
console.log(e);//ReferenceError: Cannot access 'e' before initialization
let e;  //Fix:Console e after declaration;
console.log(f);//ReferenceError: Cannot access 'f' before initialization
const f = 10;//Fix:Console e after declaration;

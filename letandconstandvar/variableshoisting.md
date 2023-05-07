
|Declaration	|Hoisting Behavior	|Initialization	    |Accessibility|
----------------|-------------------|-------------------|--------------
|var	        |Hoisted	        |Undefined	        |Entire scope |
|let	        |Hoisted	        |TD	                |TD           |
|const	        |Hoisted	        |TD	                |TD           |


In the table, "Hoisted" means that the variable declaration is moved to the top of its respective scope during compilation, while "Undefined" and "TD" mean that the variable is not initialized or accessible until it is actually declared in the code.

# Hoisting:
Hoisting is a JavaScript mechanism where variable and function declarations are moved to the top of their respective scopes during the compilation phase, before the code is executed. This means that you can use a variable or function before it has been declared in the code.

```
function example() {
  console.log(x); // Outputs "undefined"
  console.log(y); // Throws a ReferenceError
  console.log(z); // Throws a ReferenceError

  var x = 10;
  let y = 20;
  const z = 30;
}

```
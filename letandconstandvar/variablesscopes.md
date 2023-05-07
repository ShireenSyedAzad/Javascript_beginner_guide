

|Keyword	|Scope	    |Reassignment	|Block-scoped	|Constant|
|---------|-----------|-------------|-------------|--------|
|var	    |Function	  |Allowed	    |No	          |No      |    
|let	    |Block	    |Allowed	    |Yes	        |No      |
|const	  |Block	    |Not allowed	|Yes	        |Yes     |



# var
var was the original keyword used for declaring variables in JavaScript. It has function scope, which means that a variable declared with var is accessible within the function where it is declared and any nested functions. However, it is not block scoped, which means that a variable declared with var is accessible outside of any curly braces {} that define a block of code

### Eg:
```
function myFunction() {
  var x = 10;
  console.log(x); // Output: 10

  function nestedFunction() {
    console.log(x); // Output: 10
  }
  
  nestedFunction();
}

myFunction();
```
In the example above, the variable x is declared with var inside the myFunction() function. It is then accessible within the nestedFunction() function, which is nested inside myFunction(). This is because var has function scope.

```
if (true) {
  var y = 20;
}

console.log(y); // Output: 20
```
In the example above, the variable y is declared with var inside the if statement. However, it is still accessible outside the if statement because var does not have block scope.
var does not have block scope. This means that a variable declared with var inside a block of code (such as an if statement or a for loop) is accessible outside that block of code.

# let
It was introduced in ES6 (ECMAScript 2015) and is also used to declare variables. It has block scope, which means that a variable declared with let is only accessible within the block of code where it is declared. This makes let useful for declaring variables that are only needed in a particular block of code.

```
function example() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 10
}
```
In this code, we declare a variable x using let inside the function example(). We then declare another variable x using let inside an if block. The second x is only accessible within the if block, and does not affect the value of the first x declared outside of the if block.

```
function example() {
  let x = 10;
  if (true) {
    let x = 20;
    console.log(x); // Outputs 20
  }
  console.log(x); // Outputs 10
}

```
In this code, we declare a variable x using let inside the function example(). We then declare another variable x using let inside an if block. The second x is only accessible within the if block, and does not affect the value of the first x declared outside of the if block.

# const
It is also introduced in ES6 and is used to declare constants, which are values that cannot be changed after they are assigned. Like let, const also has block scope, but it cannot be reassigned. This makes const useful for declaring values that should never be changed throughout the execution of a program.
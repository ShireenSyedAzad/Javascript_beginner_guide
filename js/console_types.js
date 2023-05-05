//Different types of console and outputs can be seen in console_outputs.png file
console.time("Time");
console.log("Hello");
console.warn("WARNING");
console.error("ERROR");
console.table(["a", "b", "c"]);
console.group("My Group Label");
console.log("Message 1");
console.log("Message 2");
console.log("Message 3");
console.groupEnd();
console.group("My Hidden Group Label");
console.log("Some content here...");
console.groupCollapsed("More text goes here...");
console.log("And even further...");
console.groupEnd();
console.timeEnd("Time");
console.dir(console);
// Regular function expression
// const sayHello = function() {
//   console.log("Hello");
// };

// Arrow expression
// const sayHello = () => {
//   console.log("Hello");
// };

// One line function does not need braces
// const sayHello = () => console.log("Hello");

// sayHello();

// One line returns
// const sayHello = () => "Hello";

// Return object
// const sayHello = () => ({ msg: "Hello" });

// console.log(sayHello());

// Single params does not need parenthesis
// const sayHello = name => console.log(`Hello ${name}`);

// sayHello("Bongo");

// Must wrap multiple params with braces
// const sayHello = (firstName, lastName) =>
//   console.log(`Hello ${firstName} ${lastName}`);

// sayHello("Omar", "Bongo");

const dictators = ["Bongo", "Un", "Mugabe"];

// Old
// const nameLengths = dictators.map(function(name) {
//   return name.length;
// });

// Shorter
// const nameLengths = dictators.map((name) => {
//   return name.length;
// });

// Shortest
const nameLengths = dictators.map(name => name.length);

console.log(nameLengths);

// // Create a Symbol
// const sym1 = Symbol();
// const sym2 = Symbol('sym2');

// console.log(sym2);
// console.log(typeof sym2);

// console.log(`Hello ${sym1.toString()}`);
// console.log(`Hello ${String(sym1)}`);

// Unique Object Keys
const KEY1 = Symbol();
const KEY2 = Symbol('sym2');

const myObj = {};

myObj[KEY1] = 'prop1';
myObj[KEY2] = 'prop2';
myObj.KEY3 = 'prop3';
myObj.KEY4 = 'prop4';

// console.log(myObj[KEY2]);

// Symbols are not enumerable in for...in
for (let i in myObj) {
  console.log(`${i}: ${myObj[i]}`);
}

// Symbols are ignored by JSON.stringify
console.log(JSON.stringify({ key: 'foo' }));
console.log(JSON.stringify({ [Symbol('sym1')]: 'foo' }));

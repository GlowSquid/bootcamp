// Constructor Method

// function Person(name, dob){
//   this.name = name;
//   this.birthday = new Date(dob);
//   this.calcAge = function(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }
// }


// const alex = new Person("Alex", '1989-4-10');
// const balthazar = new Person("Balthazar", '2008-11-04');

// console.log(balthazar.calcAge());

// ---------------------------------------------------


// // String

// const name1 = "Jeff";
// const name2 = new String('Jeff');
// name2.foo = "bar";

// console.log(name2);
// console.log(typeof name2)

// if(name2 === 'Jeff'){
//   console.log("yes")
// } else{
//   console.log("no")
// }


// // Number

// const num1 = 5;
// const num2 = new Number(5);

// console.log(num2)
// console.log(typeof num2)


// // Boolean

// const bool1 = true;
// const bool2 = new Boolean(true);

// console.log(bool2)
// console.log(typeof bool2)


// // Function

// const getSum1 = function(x, y){
//   return x + y;
// }

// const getSum2 = new Function('x', 'y', 'return 1 + 2');

// console.log(getSum2(1, 2));


// // Object

// const john1 = {name: "John"};
// const john2 = new Object({name: "John"});
// console.log(john2)


// // Array

// const arr1 = [1,2,3,4];
// const arr2 = new Array(1,2,3,4);

// console.log(arr2);


// // Regular Expressions

// const re1 = /\w+/;
// const re2 = new RegExp('\\w+');

// console.log(re2);


// ---------------------------------------------------


// Prototypes

// Object.prototype
// Person.prototype

// Person constructor
function Person(firstName, lastName, dob){
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  this.calcAge = function(){
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }
}

const fred = new Person('Fred', 'Rick', '8-12-90')
const mary = new Person('Mary', 'Poppins', 'March 15, 1928')

console.log(mary);
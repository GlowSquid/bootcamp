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
// function Person(firstName, lastName, dob){
//   this.firstName = firstName;
//   this.lastName = lastName;
//   this.birthday = new Date(dob);
//   // this.calcAge = function(){
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }


// // calculate age
// Person.prototype.calcAge = function(){
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }


// // Get full name
// Person.prototype.getFullName = function(){
//   return `${this.firstName} ${this.lastName}`;
// }

// // Gets married
// Person.prototype.getsMarried = function(newLastName){
//   this.lastName = newLastName;
// }

// // Greeting
// Person.prototype.greeting = function(){
//   return `Heya ${this.firstName} ${this.lastName}`;
// }

// const fred = new Person('Fred', 'Rick', '8-12-90');
// const mary = new Person('Mary', 'Poppins', 'March 15, 1928');

// console.log(mary);
// console.log(fred.calcAge());

// console.log(mary.getFullName())
// mary.getsMarried("Magdalene")
// console.log(mary.getFullName())
// console.log(mary.hasOwnProperty('lastName'))

// // Inherit the Person prototype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer()
// Customer.prototype.constructor = Customer;

// // Customer Constructor
// function Customer(firstName, lastName, phone, membership){
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Create Customer
// const customer1 = new Customer('Tom', 'Bergeron', 1234567890, 'Standard')

// console.log(customer1);

// // Customer greeting
// Customer.prototype.greeting = function(){
//   return `Heya ${this.firstName} ${this.lastName}, welcome!`;
// }

// console.log(customer1.greeting());


// const personPrototypes = {
//   greeting: function(){
//     return `Hello ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName){
//     this.lastName = newLastName;
//   }
// }

// const fishBalls = Object.create(personPrototypes);
// fishBalls.firstName = "Fish";
// fishBalls.lastName = "Balls";
// fishBalls.age = "20 (fish years)"
// fishBalls.getsMarried("Hook");

// console.log(fishBalls.greeting());



// const timmy = Object.create(personPrototypes, {
//   firstName: {value: "TIMMY!!!"},
//   lastName: {value: "Burch"},
//   age: {value: 9}
// })

// console.log(timmy.greeting())


// ES6


// class Person{
//   constructor(firstName, lastName, dob){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting(){
//     return `Hey again ${this.firstName} ${this.lastName}`;
//   }

//   calcAge(){
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName){
//     this.lastName = newLastName;
//   }

//   static addNumbers(x, y){
//     return x + y;
//   }
// }

// const derp = new Person('Derpity', 'Derp', 05-28-1988);
// derp.getsMarried('Deriderpityderp');

// console.log(derp);

// console.log(Person.addNumbers(42, 8))


// Subclasses

class Person{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting(){
    return `Hello ${this.firstName} ${this.lastName}`;
  }
}

class Customer extends Person {
  constructor(firstName, lastName, phone, membership){
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost(){
    return '5000';
  }
}

const joe = new Customer('Joe', 'Cano', '(+63) 928-121-8434', 'Premium');

console.log(joe.greeting());
console.log(Customer.getMembershipCost());
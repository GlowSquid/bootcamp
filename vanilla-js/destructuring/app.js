// Destructuring Assignment

let a, b;
[a, b] = [100, 200];
// Rest Pattern
[a, b, c, ...rest] = [100, 200, 300, 400, 500];

console.log(rest);

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(rest);

// Array Destructuring

// const people = ['John', 'the', 'Baptist'];

// const [person1, person2, person3] = people;
// console.log(people);

// Parse array returned from function
function getPeople() {
  return ['John', 'the', 'Baptist'];
}

let person1, person2, person3;
[person1, person2, person3] = getPeople();

console.log(person1, person2, person3);

// Object Destructuring

const person = {
  name: 'Sylvanas Windrunner',
  title: 'The Banshee Queen',
  city: 'Undercity',
  race: 'Undead Elf',
  sayHello: function() {
    console.log('For the Horde!');
  }
};

// ES5
// var name = person.name;
// age = person.title;
// city = person.city;
// race = person.race;

// ES6
const { name, title, city, race, sayHello } = person;

console.log(name, title, city, race);
sayHello();

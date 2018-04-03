
const pet = {
  name: "Fido",
  type: "dog",
  breed: "German Shepherd",
  legs: 4,
  age: 5,
  language: "Doglish",
  isCat: false,
  speak: function() {
    return "woof";
  }
}

console.log(pet.speak());     // Dot notation
console.log(pet["speak"]());  // Bracket notation


// Updating data
pet.age +=1;
pet["age"] +=1;
pet.breed = "Poodle";

let extra = "dog years"
pet[extra] = 35;

// Limitations

// Only bracket notations can return properties containing spaces or is starting with numbers
const limits = {
  "1num": "one",
  "fav color": "green",
  "name": "Chun-Li"
}

//console.log(limits.1num)         // invalid
console.log(limits["1num"]);       // valid
//console.log(limits.fav color);   // invalid
console.log(limits["fav color"]);  // valid

// Look up objects using a variable
const str = "name";

console.log(limits.str);   // doesn't look for name
console.log(limits[str]);  // does evaluate str and looks for "name"

// two other ways to initialize objects
const patient = {}
patient.name = "Jessie Pinkman";
patient.gender = "Male";
patient.condition = "High as a kite";
patient.city = "Albuquerque";

const profile = new Object();
profile.name = "Walter White";
profile.alias = "Heisenberg";
profile.age = 52;
profile.occupation = "\"Chemist\"";

// objects within objects
const pets = {
  cockatiel: {
    name: "Mango",
    age: 8,
    pro: "Sings",
    con: "Singing doesn't stop"
  },
  fish: {
    name: "Bubbles",
    age: 1,
    pro: "Pretty",
    con: "Boring"
  }
}

console.log(pets.cockatiel.age)
console.log(pets.fish["age"])


const someObject = {
  friends: [
    {name: "a"},
    {name: "b"},
    {name: "c"}
  ],
  color: "pink",
  isEvil: true
};

console.log(someObject.friends[2].name)

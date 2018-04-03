
const pet = {
  name: "Fido",
  type: "dog",
  breed: "German Shepherd",
  legs: 4,
  language: "Doglish",
  speak: function() {
    return "woof";
  }
}

console.log(pet.speak());     // Dotted notation
console.log(pet["speak"]());  // Bracket notation


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

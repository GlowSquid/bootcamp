
// ES5 way

function greet(name, age, profession) {
  console.log("Hi")
  console.log("I'm " + name + "! Nice to meet you. " + "I am " + age + " years old and I am a " + profession + ".")
}

var name = "John"
var age = 35
var profession = "Teacher"
greet(name, age, profession);


function signChecker(randomNum) {
  if (randomNum > 0) {
    console.log("Positive");
  } else if (randomNum < 0) {
    console.log("Negative")
  } else {
    console.log("Zero")
  }
}

signChecker(-1)
signChecker(167)
signChecker(0)


function add(a, b) {
  // console.log(a + b);
  return a + b;
}

console.log(add(4, 5));
console.log(add(2, 4));
console.log(add(-5, 2));
console.log(add(43, 216));


function gradeCalculator(grade) {
  if (grade >= 90) {
    return "A"
  } else if (grade >= 80) {
    return "B"
  } else if (grade >= 70) {
    return "C"
  } else if (grade >=60) {
    return "D"
  } else {
    return "Fail"
  }
}

console.log(gradeCalculator(92));
console.log(gradeCalculator(68));
console.log(gradeCalculator(35));

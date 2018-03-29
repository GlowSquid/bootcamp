
function greet(name, age, profession) {
  console.log("Hi")
  console.log("I'm " + name + "! Nice to meet you. " + "I am " + age + " years old and I am a " + profession + ". My average grade is " + grade + ".")
}

const name = "John"
const age = 15
const profession = "Student"
const grade = "A"
greet(name, age, profession);


console.log("Grade Calculator")
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
console.log(gradeCalculator(73));
console.log(gradeCalculator(35));

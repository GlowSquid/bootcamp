
console.log("Check if number is positive or negative")
function signChecker(num) {
  if (num > 0) {
    return(`${num} is positive`)
  } else if (num < 0) {
    return(`${num} is negative`)
  } else {
    return(`${num} is zero`)
  }
}

console.log(signChecker(-1))
console.log(signChecker(167))
console.log(signChecker(0))


console.log("Check if number is even or odd")
function parityChecker(num) {
  if(num % 2 === 0){
    return `${num} is even`
  } else {
    return `${num} is odd`
  }
}

console.log(parityChecker(4))
console.log(parityChecker(5))
console.log(parityChecker(86))


console.log("Addition")
function add(a, b) {
  return `${a} + ${b} = ${a+b}`
}


console.log(add(4, 5));
console.log(add(2, 4));
console.log(add(-5, 2));
console.log(add(43, 216));


console.log("Subtraction")
function subtract(a, b) {
  return `${a} - ${b} = ${a-b}`
}

console.log(subtract(4, 5));
console.log(subtract(2, 4));
console.log(subtract(-5, 2));
console.log(subtract(43, 216));


console.log("Multiplication")
function multiply(a, b) {
  return `${a} * ${b} = ${a*b}`
}

console.log(multiply(4, 5));
console.log(multiply(2, 4));
console.log(multiply(-5, 2));
console.log(multiply(43, 216));


console.log("Division")
function divide(a, b) {
  return `${a} / ${b} = ${a/b}`
}

console.log(divide(4, 5));
console.log(divide(2, 4));
console.log(divide(-5, 2));
console.log(divide(43, 216));


console.log("Square")
function square(num) {
  return `${num} * ${num} = ${num*num}`
}

console.log(square(5))
console.log(square(4))
console.log(square(3))
console.log(square(15))


console.log("Factorial")
function factorial(num) {
  let total = 1;
  for(let i = 1; i <= num; i +=1 ){
    if(i >= num){
      return(`${num}! = ${total}`)
    } else {
      total *= (i+1)
    }
  }
}

console.log(factorial(5))


// Shorter, but not mine:

// console.log("Factorial")
// function factorial(num) {
//   var total = 1;
//   for(var i = 1; i <= num; i +=1 ){
//     total *= i;
//   }
//   return total;
// }

// console.log(factorial(4))

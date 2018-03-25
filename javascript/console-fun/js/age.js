
// bar entry

var age = 25;

if(age < 0){
  console.log("You need to be at least born before I can consider you")
}

else if(age < 18){
  console.log("Sorry, you're too young to enter")
}

else if(age < 21){
  console.log("You can enter, but you can't drink anything")
}

else if(age === 21){
  console.log("happy 21st birthday! Have a free shot!")
}

else if(age > 21 && age < 100){
  console.log("Come on in and have a drink!")
}

else {
  console.log("Come on in, but I'm not sure if you should have a drink")
}

if(age % 2 !== 0){
  console.log("Your age is odd")
}

if(age % Math.sqrt(age) === 0){
  console.log("Hey, we have a perfect square!")
}

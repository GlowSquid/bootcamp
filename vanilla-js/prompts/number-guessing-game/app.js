
var secretNumber = 6;

var stringGuess = prompt("Guess the number I'm thinking of");
var guess = Number(stringGuess);

if (guess === secretNumber){
  alert("Congrats, you got it right!");
}

else if(guess < secretNumber){
  alert("Too low! Guess again");
}

else{
  alert("Too high! Guess again");
}


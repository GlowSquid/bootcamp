
// game values
let min = Math.ceil(Math.random() * 84),
    max = min + Math.ceil(Math.random() * 10) + 5,
    winningNum = getWinningNum(min, max),
    guessesLeft = 3;

// UI elements
const game = document.getElementById("game"),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector("#guess-input"),
      message = document.querySelector('.message');

// assign UI min & max
minNum.textContent = min;
maxNum.textContent = max;

// play again eventlistener
game.addEventListener("mousedown", function(e){
  if(e.target.className === "play-again"){
    window.location.reload();
  }
});

// listen for guess
guessBtn.addEventListener("click", function(){
  let guess = parseInt(guessInput.value);
  console.log(guess);
  // validate input
  if(isNaN(guess) || guess < min || guess > max){
    setMessage(`Please enter a number between ${min} and ${max}!`, "red");
  } else if(guess === winningNum){
    gameOver(true, `${winningNum} is correct! Congratulations!`)
  } else{
    guessesLeft -= 1;
    if(guessesLeft === 0){
      gameOver(false, `Sorry, you lost!. The correct number was ${winningNum}!`)
    } else{
      // wrong answer
      guessInput.value = "";
      if(guess < winningNum){
        if(guessesLeft === 1){
          setMessage(`Nope.. The number is larger than ${guess}. You have only one more guess`);
        } else{
          setMessage(`Nope.. The number is larger than ${guess}. You have ${guessesLeft} guesses left`);
        }
      } else{
        if(guessesLeft === 1){
          setMessage(`Not quite.. The number is smaller than ${guess}. You have only one guess left.`);
        } else{
          setMessage(`Not quite.. The number is smaller than ${guess}. You have ${guessesLeft} guesses left.`);
        }
        
        
      }
    }
  }
});

function gameOver(won, msg){
  let color;
  won === true ? color = "green" : color = "red";

  // disable input
  guessInput.disabled = true;
  // change border color
  guessInput.style.borderColor = color;
  // set text color
  message.style.color = color;
  // set win/lose message
  setMessage(msg);
  // play again
  guessBtn.value = "Play again";
  guessBtn.className += "play-again";
}

// get winning number
function getWinningNum(min, max){
  return Math.floor(Math.random(min, max)*(max-min+1)+min);
}

// set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}
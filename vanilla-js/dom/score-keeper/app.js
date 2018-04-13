
// const btn = document.querySelector("button");
// btn.style.color = "#3C3564";


const p1Btn = document.querySelector("#p1");
const p2Btn = document.getElementById("p2");
const h2 = document.querySelector("h2");
const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");
const winDisplay = document.querySelector("p span")
let input = document.querySelector("input");
let p1Score = 0;
let p2Score = 0;
let gameOver = false;
let winScore = 5;
const reset = document.querySelector("#reset");

p1Btn.addEventListener("click", function(){
  if(!gameOver){
    p1Score++;
    if(p1Score === winScore){
      p1Display.style.color = "green";
      gameOver = true;
    }
    p1Display.textContent = p1Score;
  }
});

p2Btn.addEventListener("click", function(){
  if(!gameOver){
    p2Score++;
    if(p2Score === winScore){
      p2Display.style.color = "green";
      gameOver = true;
    }
    p2Display.textContent = p2Score;
  }
});

reset.addEventListener("click", function(){
  p1Score = 0;
  p2Score = 0;
  p1Display.textContent = p1Score;
  p2Display.textContent = p2Score;
  gameOver = false;
  winScore = Number(input.value);
  p1Display.style.color = "#000";
  p2Display.style.color = "#000";
})


input.addEventListener("change", function(){
  if(input.value >=0){
    winDisplay.textContent = input.value;
    winScore = Number(input.value);
  }
})
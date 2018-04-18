
let numSquares = 6;
let colors = [];
// let colors = generateRandomColors(numSquares);
let pickedColor;
const squares = document.querySelectorAll(".square");
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const resetBtn = document.querySelector("#reset");
const modeBtns = document.querySelectorAll(".mode");

init();

function init(){
  // modeBtns
  for(let i = 0; i <modeBtns.length; i++){
    modeBtns[i].addEventListener("click", function(){
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      modeBtns[2].classList.remove("selected");
      this.classList.add("selected");
      // if(this.textContent === "Easy"){
      //   numSquares = 3;
      // } else if(this.textContent === "Hard"){
      //   numSquares = 6;
      // } else{
      //   numSquares = 12;
      // }

      // syntax Ternary Operator
      this.textContent === "Easy" ? numSquares = 3: this.textContent === "Hard" ? numSquares = 6: numSquares = 12;
      reset();
    });
  }

  // squares
  for(let i = 0; i < squares.length; i++){
    squares[i].addEventListener("click", function(){
      let clickedColor = this.style.backgroundColor;
      if(clickedColor === pickedColor){
        resetBtn.textContent = "Play again?"
        messageDisplay.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.background = this.style.backgroundColor;
        h3.style.background = this.style.backgroundColor;
      } else {
        this.style.background = "#233"
        messageDisplay.textContent = "Wrong!";
        // console.log(clickedColor)
        // console.log(pickedColor)
      }
    });
  }

  reset();

}

function reset(){
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick new random colors from array
  pickedColor = pickColor();
  // change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  // actually change colors of squares
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.display = "block";
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  
  // change buttons & text back to default
  resetBtn.textContent = "New colors"
  h1.style.background = "steelblue"
  h3.style.background = "steelblue"
  messageDisplay.textContent = "";
}

// easyBtn.addEventListener("click", function(){
//   hardBtn.classList.remove("selected")
//   easyBtn.classList.add("selected")
//   numSquares = 3;
//   colors = generateRandomColors(numSquares);
//   pickedColor = pickColor();
//   colorDisplay.textContent = pickedColor;
//   h1.style.background = "steelblue"
//   h3.style.background = "steelblue"
//   messageDisplay.textContent = "";
//   resetBtn.textContent = "New colors"
//   for(let i = 0; i < squares.length; i++){
//     if(colors[i]){
//       squares[i].style.background = colors[i];
//     } else {
//       squares[i].style.display = "none";
//     }
//   }
// })


resetBtn.addEventListener("click", function(){
  reset();
})

// colorDisplay.textContent = pickedColor;


function changeColors(color){
  for(let i = 0; i < squares.length; i++){
    squares[i].style.background = color;
  }
}

function pickColor(){
  let random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  const arr = []
  for(let i = 0; i < num; i++){
    arr.push(randomColor());
  }
  return arr;
}

function randomColor(){
  const r = Math.floor(Math.random() * 256)
  const g = Math.floor(Math.random() * 256)
  const b = Math.floor(Math.random() * 256)
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
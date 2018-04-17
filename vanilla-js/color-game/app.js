
let numSquares = 6;
let colors = generateRandomColors(numSquares);
const squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");
const h3 = document.querySelector("h3");
const resetBtn = document.querySelector("#reset");
const easyBtn = document.querySelector("#easyBtn")
const hardBtn = document.querySelector("#hardBtn")


easyBtn.addEventListener("click", function(){
  hardBtn.classList.remove("selected")
  easyBtn.classList.add("selected")
  numSquares = 3;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++){
    if(colors[i]){
      squares[i].style.background = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
})

hardBtn.addEventListener("click", function(){
  easyBtn.classList.remove("selected")
  hardBtn.classList.add("selected")
  numSquares = 6;
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for(let i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
    squares[i].style.display = "block";

  }
})

resetBtn.addEventListener("click", function(){
  // generate all new colors
  colors = generateRandomColors(numSquares);
  // pick new random colors from array
  pickedColor = pickColor();
  // change colorDisplay to match picked colors
  colorDisplay.textContent = pickedColor;
  // actually change colors of squares
  for(let i = 0; i < squares.length; i++){
    squares[i].style.background = colors[i];
  }
  // change resetBtn text back to default
  resetBtn.textContent = "New colors"
  // change h1 & h3 text back to default
  h1.style.background = "steelblue"
  h3.style.background = "steelblue"
})

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function(){
    let clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      console.log("Correct");
      resetBtn.textContent = "Play again?"
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.background = this.style.backgroundColor;
      h3.style.background = this.style.backgroundColor;
    } else {
      this.style.background = "#233"
      console.log("wrong");
      messageDisplay.textContent = "Wrong";
      // console.log(clickedColor)
      // console.log(pickedColor)
    }
  });
}

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
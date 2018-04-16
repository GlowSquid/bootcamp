
const colors = generateRandomColors(6);

const squares = document.querySelectorAll(".square");
const pickedColor = pickColor();
const colorDisplay = document.getElementById("colorDisplay");
const messageDisplay = document.querySelector("#message");
const h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for(let i = 0; i < squares.length; i++){
  squares[i].style.background = colors[i];

  squares[i].addEventListener("click", function(){
    let clickedColor = this.style.backgroundColor;
    if(clickedColor === pickedColor){
      console.log("Correct");
      messageDisplay.textContent = "Correct!";
      changeColors(clickedColor);
      h1.style.color = ClickedColor;
    } else {
      this.style.background= "#233"
      console.log("wrong");
      messageDisplay.textContent = "Wrong";
      console.log(clickedColor)
      console.log(pickedColor)
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
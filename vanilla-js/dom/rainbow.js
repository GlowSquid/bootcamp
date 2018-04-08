
let body = document.querySelector("body");
let color = "green";

setInterval(function(){
  //let color = "green";
  if (color == "green") {
      body.style.background = "green";
      color = "red";
  } else if (color == "red"){
      body.style.background = "red";
      color = "orange";
  } else if (color == "orange"){
      body.style.background = "orange";
      color = "yellow";
  } else if (color == "yellow"){
      body.style.background = "yellow";
      color = "green";
  } else {
      body.style.background = "blue";
  }
}, 1000);




setInterval(function(){
  if (isBlue) {
      body.style.background = "white"
  } else {
  body.style.background = "#0000FF";
  }
isBlue = !isBlue;
}, 1000);
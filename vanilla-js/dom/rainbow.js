
// Rainbow !


const body = document.querySelector("body");
let color = "green";

setInterval(function(){
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
      color = "blue";
  } else if (color == "blue"){
      body.style.background = "blue";
      color = "brown";
  } else if (color == "brown"){
      body.style.background = "brown";
      color = "black";
  } else if (color == "black"){
      body.style.background = "black";
      color = "pink";
  } else if (color == "pink"){
      body.style.background = "pink";
      color = "grey";
  } else if (color == "grey"){
      body.style.background = "grey";
      color = "green";
  }
}, 200);


// Google Rainbow

const body = document.querySelector("body");
let color = "#4285F4"

setInterval(function(){
  if(color == "#4285F4"){
      body.style.background = "#4285F4";
      color = "#EA4335";
  } else if(color == "#EA4335"){
      body.style.background = "#EA4335";
      color = "#FBBC05";
  } else if(color == "#FBBC05"){
      body.style.background = "#FBBC05";
      color = "#34A853";
  } else if(color == "#34A853"){
      body.style.background = "#34A853";
      color = "#4285F4";
  }

}, 500);
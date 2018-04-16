const body = document.querySelector("body");
const h1 = document.querySelector("h1");
const btn = document.querySelector("button");
const pStrong = document.querySelector("p strong");
const p = document.querySelector("p");
const footer = document.querySelector("footer");

let darkMode = false;


btn.addEventListener("click", function(){
  if(darkMode == false){
    h1.style.color = "orange";
    pStrong.textContent = "Dark";
    pStrong.style.color = "#FFF";
    p.style.color = "#FFF";
    btn.style.backgroundColor = "orange";
    body.style.backgroundColor = "#3C3564";
    btn.textContent = "Day mode";
    btn.style.color = "#3C3564";
    footer.style.color = "#FFF"
    darkMode = true;
  } else{
    h1.style.color = "#3C3564";
    pStrong.textContent = "Light";
    pStrong.style.color = "#000";
    p.style.color = "#000";
    btn.style.backgroundColor = "#3C3564";
    body.style.backgroundColor = "#FFF";
    btn.textContent = "Dark mode";
    btn.style.color = "#FFF";
    footer.style.color = "#000";
    darkMode = false;
  }
});

h1.addEventListener("mouseover", function(){
  h1.classList.add("over");
});

h1.addEventListener("mouseout", function(){
  h1.classList.remove("over");
})

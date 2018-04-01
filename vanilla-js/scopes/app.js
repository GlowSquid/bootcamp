

var a = 1;
let b = 2;
const c = 3;



if(true){
  // Block Scope
  var a = 4;
  let b = 5;
  const c = 6;
  console.log("If Scope: ", a, b, c);
}



function test() {
  var a = 7;
  let b = 8;
  const c = 9;
  console.log("Function Scope: ", a, b, c);
}

test();

console.log("Global Scope", a, b, c);

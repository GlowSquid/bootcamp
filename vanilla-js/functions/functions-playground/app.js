
// Repeat a string num times
function repeatString(num, str){
  if(num > 0){
    return str.repeat(num);
  }
  return "";
}

console.log(repeatString(3, "HO "));
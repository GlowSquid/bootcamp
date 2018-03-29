

var str = "What's Up";
var count = 0;

for(let count = 0; count < str.length; count+=1) {
  console.log(str[count]);
}


console.log("Print all numbers between -10 and 19");

for(let count = -10; count <= 19; count+=1){
  console.log(count);
}


console.log("Print all even numbers between 10 and 40");

for(let count = 10; count <= 40; count+=1){
  if(count % 2 === 0) {
    console.log(count);
  }
}


console.log("Print all odd numbers between 300 and 333")

for(let count = 300; count <= 333; count+=1){
  if (count % 2 !== 0){
    console.log(count);
  }
}


console.log("Print all numbers divisible by 5 and 3, between 5 and 50")

for(let count = 5; count <= 50; count+=1){
  if(count % 5 === 0 && count % 3 === 0){
    console.log(count);
  }
}

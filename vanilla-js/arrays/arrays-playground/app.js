
// initialize empty arrays in two ways

const lookMom = new Array() // uncommon
const momLook = [];

// types of data
const randomThings = [49, true, "hello", null, {a: "android", b: "blog"}];

const nums = [5, 39, 922, 14]
console.log("nums length:", nums.length)
console.log(nums[3]) // forth item

// pop, push, unshift, shift

nums[4] = -35
nums[0] = 50
nums.push(20) // adds to the end
nums.pop() // removes the last entry
nums.unshift(9000) // adds to the beginning
nums.shift() // removes the first entry
console.log(nums)

// indexOf

const greeting = ["hola", "hi", "yo", "hej"];
console.log(greeting.indexOf("hi")) // 1
console.log(greeting.indexOf("hej")) // 3
console.log(greeting.indexOf("suitCase")) // -1 doesn't exist

// slicing

const stringNums = ["zero", "one", "two", "three", "four"];
console.log(stringNums);
const copySelected = stringNums.slice(1, 4); // copies items from 1 to 4, but not including 4
console.log(copySelected);

const copyAll = stringNums.slice(); // copies entire array
console.log(copyAll);


const numbers = [22, 67, 33, 96, 88];
console.log(numbers[numbers.length]) // undefined
console.log(numbers[numbers.length -1]) // 88

const groups = [
  ["first", "group"],
  ["second", "gang"],
  ["third", "herd"]
];
console.log(groups[2][0]);

const parent = [
   ["child", ["grandchild", ["great grandchild", ["great great grandchild", ["How far can you go", ["down the rabbit hole?"]]]]]]
]

console.log(parent[0][1][1][1][1][1][0])

// arr.forEach(someFunction)

const minerals = ["diamond", "amathyst", "ruby", "topaz"];
minerals.forEach(function(minerals){
  console.log(minerals);
});

const manyNums = [12, 34, 56, 78, 90, 1011]

manyNums.forEach(function(x){
  if(x% 3 === 0) {
    console.log(x);
  }
});


function reverse(arr) {
  for(let i = arr.length -1; i >= 0; i-=1){
    console.log(arr[i]);
  }
}
reverse([1,2,3,4])


// isUniform

function isUniform(arr){
  const first = arr[0];
  for(let i = 0; i < arr.length; i+=1){
    if(arr[i] !== first){
      return false;
    }
  }
  return true;
}

console.log(isUniform([4, 4, 4 ,4]))


// sumArray

function sumArray(arr){
  let total = 0;
  arr.forEach(function(element){
    total += element;
  });
  return total;
}

console.log(sumArray([2, 3, 5]))


// max

function max(arr){
  let max = arr[0];
  for(let i = 1;  i < arr.length; i+=1){
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

console.log(max([-100, 4, 30]))


// forEach

let colors = ["red", "orange", "yellow", "green"];
colors.forEach(function(color){
  console.log(color);
});
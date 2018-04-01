
// initialize empty arrays in two ways

const lookMom = new Array() // uncommon
const momLook = [];

// types of data
const randomThings = [49, true, "hello", null];

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

manyNums.forEach(function(isNum){
  if(isNum% 3 === 0) {
    console.log(isNum);
  }
});

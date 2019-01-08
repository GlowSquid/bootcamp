// Sets - Store unique values of any type

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('a string');
set1.add({ name: 'Oscar' });
set1.add(true);
set1.add(100); // does not add this. Not unique

const set2 = new Set([1, true, 'stringy']); // same, but faster syntax

console.log(set1);

console.log(set2);

// Get count
console.log(set2.size);

// Check for values
console.log(set1.has(100)); // true
console.log(set1.has(25 + 75));

console.log(set1.has({ name: 'Oscar' })); // false

// Delete from set
set1.delete(100);
console.log(set1);

// Iterate through sets //

// For...of
for (let i of set1) {
  console.log(i);
}

// For...each
set1.forEach(value => {
  console.log(value);
});

// Coverrt set to array
const setArr = Array.from(set1);
console.log(setArr);

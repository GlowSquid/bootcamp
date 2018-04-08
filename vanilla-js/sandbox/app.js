
let val;

// Number to string
val = String(555);
val = String(4+4);
// Boolean to string
val = String(true);
// Date to string
val = String(new Date());
// Array to string
val = String([1,2,3,4]);
// toString()
val = (5).toString();
val = (true).toString();
// String to number
val = Number("5.009");
val = Number(null);
val = Number("hey"); // NaN
// Parsing
val = parseInt('200.52'); // 200
val = parseFloat('200.52'); // toFixed rounds up

const val1 = String(5);
const val2 = 6;
const sum = Number(val1 + val2);


// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.5);
val = Math.ceil(2.1);
val = Math.floor(2.9);
val = Math.sqrt(16);
val = Math.abs(-27348923749);
val = Math.pow(3, 2);
val = Math.min(2, 77, 42, -11);
val = Math.max(2, 66, 2, 42, -2);
val = Math.round(Math.random() * 100 + 1);

// Output
console.log("Value:", val);
console.log("Type:", typeof val);
console.log("Length:", val.length);  // only works on strings
console.log(val.toFixed()); // only works on numbers. specify decimals

const firstName = "Michael";
const lastName = "Jackson";

val = firstName + " " + lastName;
val = firstName.concat(" ", lastName);

// Change case
val = val.toLowerCase();
val = val.toUpperCase();

// Append
val += " - The King of Pop";

// indexOf()
val = firstName.indexOf('a');
val = firstName.lastIndexOf('a');

// charAt()
val = firstName.charAt('4');

// Last char
val = firstName.charAt(firstName.length -1)

// Substring()
val = firstName.substring(0, 3)

// Slice
val = firstName.slice(-4);
val = firstName.slice(1, -1); // Slice first & last character

// Split
const str = "the quick brown fox jumps over the lazy dog";
val = str.split(" ");
const tags = "debian,arch linux,gentoo";
val = tags.split(",");

// Replace
val = tags.replace("debian", "fedora");

// Includes()
val = tags.includes('solus')


console.log(val)
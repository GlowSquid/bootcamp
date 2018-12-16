// let re;
// re = /hello/i;

// case-insensitive
// re = /hello/i;

// Global Search
// re = /hello/g;

// console.log(re);
// console.log(re.source);

// // exec() - returns result in an array or null
// const result = re.exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// // test() - Returns true or false
// const result = re.test('Hello');
// console.log(result);

// // match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(re);
// console.log(result);

// // search() - Returns index of first match. If not found, returns -1
// const str = 'Banana Hello there';
// const result = str.search(re);
// console.log(result);

// // replace() - Return new string with some or all matches of a pattern
// const str = 'Hello there';
// const newStr = str.replace(re, 'The restroom is over');
// console.log(newStr);

//
//

let re;
// Literal characters
re = /hello/i;

// Meta-Character Symbols

// Must start with
re = /^h/i;
re = /^hol/i;
// Must end with
re = /d$/i;
re = /rld$/i;
// Begins & ends with
re = /^hola world$/i;
// . matches any one character
re = /^h.la world$/i;
// Match any character 0 or more times. hllo & heeeeeeeeeeeeeello
re = /H*llo/i;
// Optional character. Grey, Gray, even Gry
re = /gre?a?y/i;
// Escape Character
re = /gre?a?y\?/i;

// Brackets [] - Character Sets
// Must be an a or e
re = /gr[ae]y/i;
re = /[GF]rey/i;
// Will match anything except G or F
re = /[^GF]rey/i; // ^ inside brackets means Not
// Matches any A to Z
re = /[A-Z]rey/; // uppercase
re = /[a-z]rey/; // lowercase
re = /[A-Za-z]rey/; // any case
re = /[0-9]rey/; // numbers

// Braces {} - Quantifiers
// letter before {} must occur 3 times
re = /Hel{3}o/i;
// letter before {} must occur 2-4 times
re = /Hel{2,4}o/i;
// letter before {} must occur 2-infinite times
re = /Hel{2,}o/i;

// Parentheses () - Grouping
re = /^([0-9]x){3}$/;

// Shorthand Character Classes
// Word Character - alphanumeric character or _
re = /\w/;
// - + = one or more
re = /\w+/;
// Non-Word Characters
re = /\W/;
// Matches any digit 0 or more times
re = /\d/;
// Matches any Non-Digits
re = /\D/;
// Matches whitespace characters
re = /\s/;
// Matches non-whitespace characters
re = /\S/;
// Word Boundary
re = /Hell\b/i;
// Assertions
// Match x only if followed by y
re = /x(?=y)/;
// Match x only if NOT followed by y
re = /x(?!y)/;

// String to match
// const str = 'Helllllo';
// const str = '2x3x4x';
// const str = 'Hello welcome to Hell';
const str = 'zyxxyz';

// Log result
const result = re.exec(str);
console.log(result);

const reTest = (re, str) => {
  if (re.test(str)) {
    console.log(`"${str}" matches "${re.source}"`);
  } else {
    console.log(`"${str}" doesn't match "${re.source}"`);
  }
};

reTest(re, str);

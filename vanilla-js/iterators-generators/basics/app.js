// Iterator Example

function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function() {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    }
  };
}

// Create array of names
const namesArr = ['Jibbers', 'Jebediah', 'Josephine'];

// Init iterator and names in the names array
const names = nameIterator(namesArr);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

// Generator Example

function* sayNames() {
  yield 'Jacklyn';
  yield 'Jocelyn';
  yield 'Jonalyn';
}

const name = sayNames();

console.log(name.next().value);

// ID Creator
function* createIds() {
  let index = 10;

  while (true) {
    yield index++;
  }
}

const gen = createIds();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);

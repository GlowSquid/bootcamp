// function helpful() {
//   console.log('I can be very helpful');
// }

// function notHelpful() {
//   console.log("I'm just bloated");
// }

// function sort() {
//   console.log("I'm sorting out all your problems");
// }

// export { helpful, notHelpful, sort };

function randomizeItems(items) {
  const index = Math.floor(Math.random() * items.length);
  return items[index];
}

function removeItems(items, item) {
  for (let i = 0; i < items.length; i += 1) {
    if (items[i] === item) {
      return [...items.slice(0, i), ...items.slice(i + 1)];
    }
  }
}

export { randomizeItems, removeItems };

// Basic Structure

// (function() {
//   // Declare private vars and functions

//   return {
//     // Declare public vars and functions
//   }
// })();

// Standard Module Pattern
// const UICtrl = (function() {
//   let text = 'Hello';
//     // Private - Can't be accessed outside
//   const changeText = function() {
//     const element = document.querySelector('h1');
//     element.textContent = text;
//   };

//   return {
//     callChangeText: function() {
//       changeText();
//       console.log(text);
//     }
//   };
// })();

// UICtrl.callChangeText();

// Revealing Module Pattern - map object literal//
const ItemCtrl = (function() {
  let _data = [];

  // Private
  function add(item) {
    _data.push(item);
    console.log('item added');
  }

  function get(id) {
    return _data.find(item => {
      return item.id === id;
    });
  }

  return {
    add,
    get
  };
})();

ItemCtrl.add({ id: 1, name: 'Cheeseballs' });

console.log(ItemCtrl.get(1));

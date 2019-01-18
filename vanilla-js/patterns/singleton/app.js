const Singleton = (function() {
  let instance;

  function createInstance() {
    // const obj = new Object('Object Instance');
    // const obj = new Object(24);
    const obj = new Object({ drink: 'Pepsi' });
    return obj;
  }

  return {
    getInstance: function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const instanceA = Singleton.getInstance();
const instanceB = Singleton.getInstance();

console.log(instanceA, instanceB);
console.log(instanceA === instanceB);

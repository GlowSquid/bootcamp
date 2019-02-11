const Generation = require('./generation');
const generation = new Generation();

const charmander = generation.newCreature();
console.log('Charmander', charmander);

const GenerationEngine = require('./engine');
const engine = new GenerationEngine();

engine.start();

setTimeout(() => {
  engine.stop();
}, 20000);

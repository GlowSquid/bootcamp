const TRAITS = require('../../data/traits.json');

const DEFAULT_PROPERTIES = {
  creatureId: undefined,
  get birthdate() {
    return new Date();
  },
  nickname: 'Unnamed',
  generationId: undefined,
  get randomTraits() {
    const traits = [];

    TRAITS.forEach(TRAIT => {
      const traitType = TRAIT.type;
      const traitValues = TRAIT.values;

      const traitValue =
        traitValues[Math.floor(Math.random() * traitValues.length)];

      traits.push({ traitType, traitValue });
    });

    return traits;
  }
};

class Creature {
  constructor({ creatureId, birthdate, nickname, traits, generationId } = {}) {
    this.creatureId = creatureId || DEFAULT_PROPERTIES.creatureId;
    this.birthdate = birthdate || DEFAULT_PROPERTIES.birthdate;
    this.nickname = nickname || DEFAULT_PROPERTIES.nickname;
    this.traits = traits || DEFAULT_PROPERTIES.randomTraits;
    this.generationId = generationId || DEFAULT_PROPERTIES.generationId;
  }
}

module.exports = Creature;

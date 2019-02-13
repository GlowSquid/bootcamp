const pool = require('../../databasePool');
const CreatureTable = require('./table');
const Creature = require('./index');

const getCreatureWithTraits = ({ creatureId }) => {
  return Promise.all([
    CreatureTable.getCreature({ creatureId }),
    new Promise((resolve, reject) => {
      pool.query(
        `
          SELECT "traitType", "traitValue"
          FROM trait
          INNER JOIN creatureTrait ON trait.id = creatureTrait."traitId"
          WHERE creatureTrait."creatureId" = $1
        `,
        [creatureId],
        (err, resp) => {
          if (err) return reject(err);

          resolve(resp.rows);
        }
      );
    })
  ])
    .then(([creature, creatureTraits]) => {
      return new Creature({
        // nickname: creature.nickname,
        // birthdate: creature.birthdate,
        // generationId: creature.generationId
        ...creature,
        creatureId,
        traits: creatureTraits
      });
    })
    .catch(err => console.error(err));
};

// Debugging
// getCreatureWithTraits({ creatureId: 1 })
//   .then(creature => console.log('creature: ', creature))
//   .catch(err => console.error('error: ', err));

module.exports = getCreatureWithTraits;

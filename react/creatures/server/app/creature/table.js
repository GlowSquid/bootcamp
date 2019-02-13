const pool = require('../../databasePool');
const CreatureTraitTable = require('../creatureTrait/table');

class CreatureTable {
  static storeCreature(creature) {
    const { birthdate, nickname, generationId } = creature;

    return new Promise((resolve, reject) => {
      pool.query(
        `INSERT INTO creature(birthdate, nickname, "generationId")
        VALUES($1, $2, $3) RETURNING id`,
        [birthdate, nickname, generationId],
        (err, resp) => {
          if (err) return reject(err);

          const creatureId = resp.rows[0].id;

          Promise.all(
            creature.traits.map(({ traitType, traitValue }) => {
              return CreatureTraitTable.storeCreatureTrait({
                creatureId,
                traitType,
                traitValue
              });
            })
          )
            .then(() => resolve({ creatureId }))
            .catch(err => reject(err));
        }
      );
    });
  }

  static getCreature({ creatureId }) {
    return new Promise((resolve, reject) => {
      pool.query(
        'SELECT birthdate, nickname, "generationId" FROM creature WHERE creature.id = $1',
        [creatureId],
        (err, resp) => {
          if (err) return reject(err);

          if (resp.rows.length === 0) return reject(new Error('no creature'));

          resolve(resp.rows[0]);
        }
      );
    });
  }
}

// Debugging
// CreatureTable.getCreature({ creatureId: 1 })
//   .then(creature => console.log(creature))
//   .catch(err => console.error('error: ', err));

module.exports = CreatureTable;

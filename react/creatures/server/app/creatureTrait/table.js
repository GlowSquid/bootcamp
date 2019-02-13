const pool = require('../../databasePool');
const TraitTable = require('../trait/table');

class CreatureTraitTable {
  static storeCreatureTrait({ creatureId, traitType, traitValue }) {
    return new Promise((resolve, reject) => {
      TraitTable.getTraitId({ traitType, traitValue }).then(({ traitId }) => {
        pool.query(
          'INSERT INTO creatureTrait("traitId", "creatureId") VALUES($1, $2)',
          [traitId, creatureId],
          (err, resp) => {
            if (err) return reject(err);

            resolve();
          }
        );
      });
    });
  }
}

module.exports = CreatureTraitTable;

const { Router } = require('express');

const CreatureTable = require('../creature/table');

const router = new Router();

router.get('/new', (req, res, next) => {
  const creature = req.app.locals.engine.generation.newCreature();

  CreatureTable.storeCreature(creature)
    .then(({ creatureId }) => {
      console.log('creatureId: ', creatureId);

      creature.creatureId = creatureId;

      res.json({ creature });
    })
    .catch(err => next(err));
});

module.exports = router;

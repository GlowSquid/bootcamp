const { Router } = require('express');

const router = new Router();

router.get('/new', (req, res) => {
  res.json({ creature: req.app.locals.engine.generation.newCreature() });
});

module.exports = router;

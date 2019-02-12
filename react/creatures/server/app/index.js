const express = require('express');

const GenerationEngine = require('./generation/engine');
const creatureRouter = require('./api/creature');
const generationRouter = require('./api/generation');

const app = express();
const engine = new GenerationEngine();

app.locals.engine = engine;

app.use('/creature', creatureRouter);
app.use('/generation', generationRouter);

engine.start();

module.exports = app;

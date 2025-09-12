const express = require('express');
const entriesRouter = require('./routes/tournament.routes');

const app = express();
app.use(express.json());
app.use('/entries', entriesRouter);

module.exports = app;
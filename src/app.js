'use strict';
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const uuid = require('uuid/v4');

const app = express();
const { NODE_ENV } = require('./config');

const bookmarksRouter = require('./routes/bookmarks-router');

const morganOption = NODE_ENV === 'production' ? 'tiny' : 'common';

app.use(morgan(morganOption));
app.use(helmet());
app.use(cors());
const API_TOKEN = process.env.API_TOKEN;
function handleBearer(req, res, next) {
  const authValue = req.get('Authorization') || ' ';
  if (!authValue.toLowerCase().startsWith('bearer')) {
    return res.status(400).json({ error: 'Missing Bearer token' });
  }
  const authToken = authValue.split(' ')[1];
  if (authToken !== API_TOKEN) {
    return res.status(400).json({ error: 'Invalid credentials' });
  }
  next();
}
app.use(handleBearer);

app.use('/api/bookmarks', bookmarksRouter);

app.use(function errorHandling(err, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(err);
    response = { message: err.message, err };
  }
  res.status(500).json(response);
});

module.exports = app;

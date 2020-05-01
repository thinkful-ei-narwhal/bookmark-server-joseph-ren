'use strict';
const express = require('express');
const bookmarksRouter = express.Router();
const store = require('../store');
const uuid = require('uuid/v4');

bookmarksRouter
  .route('/')
  .get((req, res) => {
    res.json(store);
  })
  .post((req, res) => {});

bookmarksRouter
  .route('/:id')
  .get((req, res) => {
    res.send('ID working');
  })
  .delete((req, res) => {});

module.exports = bookmarksRouter;

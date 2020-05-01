'use strict';
const express = require('express');
const bookmarksRouter = express.Router();

bookmarksRouter
  .route('/')
  .get((req, res) => {
    res.send('Routing working from');
  })
  .post((req, res) => {});

bookmarksRouter
  .route('/:id')
  .get((req, res) => {
    res.send('ID working');
  })
  .delete((req, res) => {});

module.exports = bookmarksRouter;

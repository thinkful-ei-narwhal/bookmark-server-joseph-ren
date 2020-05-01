'use strict';
const express = require('express');
const bookmarksRouter = express.Router();
const { bookmarks } = require('../store');
const uuid = require('uuid/v4');


bookmarksRouter
  .route('/')
  .get((req, res) => {
    res.json(bookmarks);
  })
  .post((req, res) => {});

bookmarksRouter
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    const selectedBookmark = bookmarks.filter(bookmark => bookmark.id == id)
    if (selectedBookmark.length === 0) {
      return res.status(404).json({ error: "Bookmark not found!" });
    } else {
      return res.status(200).json(selectedBookmark);
    }
  })
  .delete((req, res) => {});

module.exports = bookmarksRouter;

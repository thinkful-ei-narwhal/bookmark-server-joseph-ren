'use strict';
const express = require('express');
const bookmarksRouter = express.Router();
const { bookmarks } = require('../store');
const bodyParser = express.json();
const uuidv4 = require('uuid/v4');


bookmarksRouter
  .route('/')
  .get((req, res) => {
    res.json(bookmarks);
  })
  .post(bodyParser, (req, res) => {
    const { title, url, description, rating } = req.body;
    if (!title || !url || !description || !rating) {
      res.status(400).json({ error: 'You need to include all fields' });
    }
    if (!url.startsWith('https://')) {
      res
        .status(400)
        .json({ error: "You need to inculde valid 'https' protocol" });
    }
    bookmarks.push({
      id: uuidv4(),
      title,
      url,
      description,
      rating: Number(rating),
    });
    res.json(bookmarks);
  });

bookmarksRouter
  .route('/:id')
  .get((req, res) => {
    const { id } = req.params;
    const selectedBookmark = bookmarks.filter((bookmark) => bookmark.id == id);
    if (selectedBookmark.length === 0) {
      return res.status(404).json({ error: 'Bookmark not found!' });
    } else {
      return res.status(200).json(selectedBookmark);
    }
  })
  .delete((req, res) => {
    const { id } = req.params;
    const findId = bookmarks.findIndex((i) => i.id == id);
    if (findId === -1) {
      return res.status(400).json({ error: 'No Bookmark found' });
    } else {
      bookmarks.splice(findId, 1);
      return res.json(bookmarks);
    }
  });

module.exports = bookmarksRouter;

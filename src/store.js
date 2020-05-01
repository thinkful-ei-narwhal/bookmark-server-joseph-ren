'use strict';
const uuid = require('uuid/v4');

const bookmarks = [
  {
    id: uuid(),
    title: 'Thinkful',
    url: 'https://www.thinkful.com',
    description: 'Think outside the classroom',
    rating: 5,
  },
  {
    id: uuid(),
    title: 'Google',
    url: 'https://www.google.com',
    description:
      'Where we find everything else.... even stuff we never wanted to know',
    rating: 4,
  },
  {
    id: uuid(),
    title: 'MDN',
    url: 'https://developer.mozilla.org',
    description: 'The only place to find web documentation',
    rating: 2,
  },
  {
    id: uuid(),
    title: 'Twitter',
    url: 'https://twitter.com',
    description: 'People tweeting like birds',
    rating: 3,
  },
  {
    id: uuid(),
    title: 'Twitch',
    url: 'https://twitch.tv',
    description: 'Live game play and other weird stuff',
    rating: 5,
  },
];

module.exports = { bookmarks };
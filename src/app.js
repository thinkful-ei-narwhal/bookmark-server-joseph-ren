require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const helmet = require('helmet')

const app = express()
const { NODE_ENV } = require('./config')

const bookmarksRouter = require('./routes/bookmarks-router')


const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption))
app.use(helmet())
app.use(cors())

app.use('/bookmarks', bookmarksRouter);


app.use(function errorHandling(err, req, res, next) {
  let response;
  if (NODE_ENV === 'production')  {
    response = { error: { message: 'server error' } }
  } else {
    console.error(err)
    response = { message: err.message, err }
  }
  res.status(500).json(response)
})


module.exports = app
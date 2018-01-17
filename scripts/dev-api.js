const initializeBackend = require('./initializeBackend')
const express = require('express')
const app = express()
require('dotenv').config({ silent: true })

initializeBackend(app)

console.log('api server running 3001...')
app.listen(3001)

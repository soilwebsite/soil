const initializeServer = require('./initializeServer')
const express = require('express')
const app = express()
require('dotenv').config({ silent: true })

initializeServer(app)

console.log('api server running 3001...')
app.listen(3001)

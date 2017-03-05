const express = require('express')
const app = express()
require('dotenv').config()

app.all('/*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", process.env.APP_DOMAIN);
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.use('/api/v1', require('../server/api/v1'));

console.log('api server running 3001...');
app.listen(3001);

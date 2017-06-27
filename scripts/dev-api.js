const express = require('express')
const app = express()
require('dotenv').config({ silent: true })

app.all('/*', function(req, res, next) {
  console.log('hello');
  // res.header("Access-Control-Allow-Origin", process.env.REACT_APP_DOMAIN);
  res.header("Access-Control-Allow-Origin", '*');
  res.header("Access-Control-Allow-Headers", "Content-Type", "X-Requested-With")
  next();
});

app.use('/api/v1', require('../server/api/v1'));

console.log('api server running 3001...');
app.listen(3001);

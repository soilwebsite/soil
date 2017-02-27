const express = require('express')
const app = express()

app.use('/api/v1', require('../server/api/v1'));

console.log('api server running 3001...');
app.listen(3001);

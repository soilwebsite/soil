const initializeServer = require('./initializeServer');
const express = require('express')
const path = require('path')
const app = express()
process.env.NODE_ENV = 'production';

require('dotenv').config()

app.use(express.static(path.join(__dirname, '../build')));
app.set('port', process.env.PORT || 3000);

initializeServer(app)

app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
})

app.listen(app.get('port'), () => {
  console.info('*******************************************************');
  console.info('Server listening on port ' + app.get('port') + ' env --> ' + process.env.NODE_ENV);
  console.info("*******************************************************\n");
});

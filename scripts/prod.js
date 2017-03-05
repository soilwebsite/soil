const express = require('express')
const path = require('path')
const app = express()
require('dotenv').config()
process.env.REACT_APP_API_DOMAIN = process.env.REACT_APP_DOMAIN
console.log('process.env.REACT_APP_DOMAIN')
console.log(process.env.REACT_APP_DOMAIN)
console.log('process.env.REACT_APP_API_DOMAIN')
console.log(process.env.REACT_APP_API_DOMAIN)

app.use(express.static(path.join(__dirname, '../build')));
app.set('port', process.env.PORT || 3000);

app.use('/api/v1', require('../server/api/v1'));
app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
})


app.listen(app.get('port'), () => {
  console.info('*******************************************************');
  console.info('Forest Tribe server listening on port ' + app.get('port') + ' env --> ' + process.env.NODE_ENV);
  console.info("*******************************************************\n");
});

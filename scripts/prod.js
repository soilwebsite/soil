const express = require('express')
const path = require('path')
const app = express()


app.use(express.static(path.join(__dirname, '../build')));
app.set('port', process.env.PORT || 3000);


app.use('/api/v1', require('../server/api/v1'));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
})


app.listen(app.get('port'), () => {
  let env = process.env.DEV ? 'dev' : 'prod';
  console.info('*******************************************************');
  console.info('Forest Tribe server listening on port ' + app.get('port') + ' env --> ' + env);
  console.info("*******************************************************\n");
});

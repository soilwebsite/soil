const express = require('express');
const path = require('path');
const app = express();

console.log('node env:', process.env.NODE_ENV);

app.use(express.static(path.join(__dirname, '../build')));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});

app.set('port', process.env.PORT || 3000);
console.log('*** On port ', app.get('port'), ' ***');
app.listen(app.get('port'));

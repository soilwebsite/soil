/// added
require('../db');
process.env.NODE_ENV = 'production';
///

const express = require('express');
const path = require('path');
const app = express();


const port = process.env.PORT || 3031;
app.set('port', port);

if(process.env.NODE_ENV === 'production') {
  // Serve static assets
  // app.use(express.static('build'));
  app.use(express.static(path.resolve(__dirname, '..', 'build')));
  console.log('√ Production build');
}

// Always return the main index.html, so react-router render the route in the client
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'index.html'));
});


/// Start server

app.listen(app.get('port'), () => {
  console.log(`Server started at: http://localhost:${app.get('port')}/`);
})

module.exports = app;

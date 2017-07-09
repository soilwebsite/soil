const bodyParser = require('body-parser');

module.exports = (app) => {
  app.use(bodyParser.json({ strict: true }))
  app.use(bodyParser.urlencoded({ extended: true }))

  app.all('/*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", process.env.REACT_APP_DOMAIN);
    res.header("Access-Control-Allow-Headers", "X-Requested-With, Content-Type")
    next();
  });

  app.use('/api/v1', require('../server/api/v1'));
}

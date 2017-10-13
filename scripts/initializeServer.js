const bodyParser = require('body-parser')

module.exports = app => {
  app.use(bodyParser.json({ strict: true }))
  app.use(bodyParser.urlencoded({ extended: true }))

  app.get('*', function(req, res, next) {
    if (req.headers['x-forwarded-proto'] !== 'https' && process.env.NODE_ENV === 'production') {
      // Redirect http to https using Heroku x-header
      // https://stackoverflow.com/questions/7185074/heroku-nodejs-http-to-https-ssl-forced-redirect
      res.redirect('https://' + req.hostname + req.url)
    } else {
      next()
    }
  })

  app.all('/*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', process.env.REACT_APP_DOMAIN)
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type')
    next()
  })

  app.use('/api/v1', require('../server/api/v1'))
}

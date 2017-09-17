const models = require('../../models')

module.exports = (req, res) => {
  models.Image.findAll({ include: models.Tag }).then(function(data) {
    return res.json(data)
  })
}

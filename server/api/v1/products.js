const models = require('../../models')

module.exports = (req, res) => {
  models.Product.findAll({ include: [models.Tag, models.Image] }).then(function(data) {
    return res.json(data)
  })
}

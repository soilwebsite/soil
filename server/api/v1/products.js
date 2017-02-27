const models = require('../../models');

module.exports = (req, res) => {
  models.Product.findAll().then(function(data) {
    return res.json(data);
  })
}

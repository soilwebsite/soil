const models = require('../../models');

module.exports = (req, res) => {
  models.Tag.findAll().then(function(data) {
    return res.json(data);
  })
}

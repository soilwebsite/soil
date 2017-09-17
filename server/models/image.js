module.exports = function(sequelize, DataTypes) {
  return sequelize.define('image', {
    url: DataTypes.STRING
  })
}

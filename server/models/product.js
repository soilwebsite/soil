module.exports = function(sequelize, DataTypes) {
  return sequelize.define("Product", {
    name: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
  })
}

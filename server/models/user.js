module.exports = function(sequelize, DataTypes) {
  return sequelize.define("User", {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING
  })
}

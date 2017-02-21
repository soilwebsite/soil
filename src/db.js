// const Sequelize = require('sequelize');
//
// var sequelize = new Sequelize(process.env.DATABASE_URL, 'josx', 'qpow', {
//   host: 'localhost',
//   dialect: 'postgres',
//   pool: {
//     max: 5,
//     min: 0,
//     idle: 10000
//   }
// });
//
// sequelize
//   .authenticate()
//   .then(function(err) {
//     console.log('√ Postgres connected');
//   })
//   .catch(function (err) {
//     console.log('Unable to connect to the database:', err);
//   });
//
//   var User = sequelize.define('user', {
//     firstName: {
//       type: Sequelize.STRING
//     },
//     lastName: {
//       type: Sequelize.STRING
//     }
//   });
//
//   // force: true will drop the table if it already exists
//   User.sync({force: true}).then(function () {
//     // Table created
//     return User.create({
//       firstName: 'John',
//       lastName: 'Hancock'
//     });
//   })
//   .then(() => {
//     User.findAll().then(function(users) {
//       console.log(users)
//     })
//   });
//
//   module.exports = sequelize;

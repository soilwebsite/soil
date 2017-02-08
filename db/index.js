const Sequelize = require('sequelize');
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/forest-tribe';

var sequelize = new Sequelize('forest-tribe', 'josx', 'qpow', {
  host: 'localhost',
  dialect: 'postgres',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
});

// module.exports = sequelize;

sequelize
  .authenticate()
  .then(function(err) {
    console.log('√ Postgres connected');
  })
  .catch(function (err) {
    console.log('Unable to connect to the database:', err);
  });

  var User = sequelize.define('user', {
    firstName: {
      type: Sequelize.STRING
    },
    lastName: {
      type: Sequelize.STRING
    }
  });

  // force: true will drop the table if it already exists
  User.sync({force: true}).then(function () {
    // Table created
    return User.create({
      firstName: 'John',
      lastName: 'Hancock'
    });
  })
  .then(() => {
    User.findAll().then(function(users) {
      console.log(users)
    })
  });

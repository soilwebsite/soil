if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.NODE_ENV === 'production') {
    // the application is executed on Heroku ... use the postgres database
    sequelize = new Sequelize(process.env.REACT_APP_DB_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      // port:     match[4],
      // host:     match[3],
      logging:  true //false
    })
  } else {
    // the application is executed on the local machine ... use mysql
    // sequelize = new Sequelize('forest-tribe', 'root', null)
    sequelize = new Sequelize(
      process.env.REACT_APP_LOCAL_DB_URL,
      process.env.REACT_APP_LOCAL_DB_USER,
      process.env.REACT_APP_LOCAL_DB_PASS, {
      host: 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });
  }

  global.db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    User:      sequelize.import(__dirname + '/user')
    // add your other models here
  }

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */

  // TEST
  sequelize
    .authenticate()
    .then(function(err) {
      console.log('√ Postgres connected');
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });

    var User = global.db.User;
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
}

module.exports = global.db

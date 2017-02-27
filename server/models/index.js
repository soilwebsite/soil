if (!global.hasOwnProperty('db')) {
  var Sequelize = require('sequelize')
    , sequelize = null

  if (process.env.NODE_ENV === 'production') {
    console.log('app in Production...');
    sequelize = new Sequelize(process.env.REACT_APP_DB_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      logging:  true
    })
  } else {
    console.log('app in Development...');
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
    // Sequelize: Sequelize,
    sequelize: sequelize,
    User:      sequelize.import(__dirname + '/user'),
    Product:   sequelize.import(__dirname + '/product')
    // add your other models here
  }

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */

  sequelize
    .authenticate()
    .then(err => console.log('√ Postgres connected'))
    .catch(err => console.log('Unable to connect to the database:', err));

    var Product = global.db.Product;
    Product.sync({force: true}).then(function () {
      // Table created
      return Product.bulkCreate([{
        name: 'Black Top',
        imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Sasha.jpg'
      }, {
        name: 'Studded Leather Vest',
        imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/47/fc/c2/47fcc2871992396a5a085e155b92a537.jpg'
      }, {
        name: 'Nice Pearl Sweater',
        imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Kaitlyn.jpg'
      }, {
        name: 'Tribal Headwrap',
        imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Gloria.jpg'
      }]);
    })
}

module.exports = global.db

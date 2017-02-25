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

  // TEST
  sequelize
    .authenticate()
    .then(function(err) {
      console.log('√ Postgres connected');
    })
    .catch(function (err) {
      console.log('Unable to connect to the database:', err);
    });

    var Product = global.db.Product;
    Product.sync({force: true}).then(function () {
      // Table created
      return Product.bulkCreate([{
        name: 'Handbag',
        imageUrl: 'https://ak1.ostkcdn.com/images/products/11528497/P18476363.jpg'
      }, {
        name: 'Coat',
        imageUrl: 'https://mb-brandstores-2-863894.c.cdn77.org/images/articles/dd8feadaa75d7337a7358e4228d877fd_12.png'
      }, {
        name: 'Dress',
        imageUrl: 'https://s-media-cache-ak0.pinimg.com/236x/19/cd/66/19cd665dc090729fce969342d3311310.jpg'
      }]);
    })
    // .then(() => {
    //   Product.findAll().then(function(products) {
    //     console.log(products[0].dataValues)
    //   })
    // });
}

module.exports = global.db


if (!global.hasOwnProperty('db')) { // check to see if sequelize is defined yet
  const { dbUrl, dbUser, dbPass } = require('../../app-config')
  const Sequelize = require('sequelize')
  let sequelize;

  const seedDB = () => {
      return global.db.Tag.bulkCreate([{
        name: 'tops'
      }, {
        name: 'bottoms'
      }, {
        name: 'dresses',
      }, {
        name: 'outerwear'
      }, {
        name: 'accessories'
      }
    ])
    .then(() => {
      return global.db.Product.bulkCreate([{
        name: 'Solid Black Top',
        imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Sasha.jpg'
        }, {
        name: 'Studded Leather Bikini',
        imageUrl: 'https://s-media-cache-ak0.pinimg.com/736x/47/fc/c2/47fcc2871992396a5a085e155b92a537.jpg'
        }, {
        name: 'Nice Pearl Dress',
        imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Kaitlyn.jpg'
        }, {
        name: 'Tribal Headwrap',
        imageUrl: 'http://wpexplorer-demos.com/photopro/wp-content/uploads/sites/12/2012/10/Gloria.jpg'
        }
      ])
    })
    .then(products => {
      return global.db.Tag.findById(1).then((tag) => products[0].addTag())
        .then(global.db.Tag.findById(2).then((tag) => products[1].addTag()))
        .then(global.db.Tag.findById(3).then((tag) => products[3].addTag()))
        .then(global.db.Tag.findById(4).then((tag) => products[3].addTag()))
    })
    .then(() => {
      global.db.Tag.findById(1).then(tag => {
        global.db.Product.findById(1).then(product => {
          product.addTag(tag)
        })
      })
      global.db.Tag.findById(2).then(tag => {
        global.db.Product.findById(2).then(product => {
          product.addTag(tag)
        })
      })
      global.db.Tag.findById(3).then(tag => {
        global.db.Product.findById(3).then(product => {
          product.addTag(tag)
        })
      })
      global.db.Tag.findById(4).then(tag => {
        global.db.Product.findById(4).then(product => {
          product.addTag(tag)
        })
      })
      global.db.Tag.findById(5).then(tag => {
        global.db.Product.findById(4).then(product => {
          product.addTag(tag)
        })
      })
        // .then(() => global.db.Product.findOne({ where: { id: 1 }, include: global.db.Tag }))
        // .then(res => console.log(res.dataValues.tags))
    })
  }

  if (process.env.NODE_ENV === 'production') {
    console.log('app in Production...')
    sequelize = new Sequelize(process.env.REACT_APP_DB_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      logging:  true
    })
  } else {
    console.log('app in Development...')
    sequelize = new Sequelize(dbUrl, dbUser, dbPass, {
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
    User:      sequelize.import(__dirname + '/user'),
    Product:   sequelize.import(__dirname + '/product'),
    Tag:       sequelize.import(__dirname + '/tag')
    // add your other models here
  }

  /*
    Associations can be defined here. E.g. like this:
    global.db.User.hasMany(global.db.SomethingElse)
  */
  global.db.Product.belongsToMany(global.db.Tag, {through: 'products_tags'});
  global.db.Tag.belongsToMany(global.db.Product, {through: 'products_tags'})

  sequelize
    .authenticate()
    .then(err => console.log('√ Postgres connected'))
    .catch(err => console.log('Unable to connect to the database:', err));

    sequelize
    .sync({ force: true })
    .then(err => seedDB())
    .catch(err => console.log('An error occurred while creating the table:', err))
}

module.exports = global.db

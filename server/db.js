
let db
if (!global.hasOwnProperty('db')) {
  global.db = true

  // connect
  const Sequelize = require('sequelize')
  let seeder = require('./seeder')
  let sequelize

  if (process.env.NODE_ENV === 'production') {
    console.log('App in Production...')
    sequelize = new Sequelize(process.env.REACT_APP_DB_URL, {
      dialect:  'postgres',
      protocol: 'postgres',
      logging:  true
    })
  } else {
    console.log('App in Development...')
    sequelize = new Sequelize(
      process.env.REACT_APP_DB_URL,
      process.env.REACT_APP_DB_USER,
      process.env.REACT_APP_DB_PASS, {
      host: 'localhost',
      dialect: 'postgres',
      pool: {
        max: 5,
        min: 0,
        idle: 10000
      }
    });
  }

  // define models
  let User = sequelize.import(__dirname + '/models/user')
  let Product = sequelize.import(__dirname + '/models/product')
  let Tag = sequelize.import(__dirname + '/models/tag')

  // associate models
  Product.belongsToMany(Tag, {through: 'products_tags'});
  Tag.belongsToMany(Product, {through: 'products_tags'})

  // test connection
  sequelize
    .authenticate()
    .then(err => console.log('√ Postgres connected'))
    .catch(err => console.log('Unable to connect to the database:', err));

  // seed DB
  sequelize
    .sync({ force: true })
    .then(res => seeder(db.models))
    .catch(err => console.log('An error occurred while creating the table:', err))

  // export
  db = {
    Sequelize: Sequelize,
    sequelize: sequelize,
    models: {
      User: User,
      Product: Product,
      Tag: Tag
    }
  }
}

module.exports = db

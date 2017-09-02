
let db = {}
const initDB = () => {
  global.dbInitiated = true

  const Sequelize = require('sequelize')
  let seeder = require('./seeder')
  let sequelize

  const connect = () => {
    if(process.env.NODE_ENV === 'production') {
      console.log('App in Production...')
      console.log(process.env.DATABASE_URL)
      sequelize = new Sequelize(
        process.env.DB_URL,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
          dialect:  'postgres',
          protocol: 'postgres',
          logging:  true
        }
      )
    } else {
      console.log('App in Development...')
      sequelize = new Sequelize(
        process.env.DB_URL,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
          host: 'localhost',
          dialect: 'postgres',
          pool: {
            max: 5,
            min: 0,
            idle: 10000
          }
        }
      )
    }
  }

  const createModels = () => {
    let User = sequelize.import(__dirname + '/models/user')
    let Product = sequelize.import(__dirname + '/models/product')
    let Tag = sequelize.import(__dirname + '/models/tag')

    Product.belongsToMany(Tag, { through: 'products_tags' })
    Tag.belongsToMany(Product, { through: 'products_tags' })

    db.models = {
      User,
      Product,
      Tag
    }
  }

  const testConnection = () => {
    sequelize
    .authenticate()
    .then(() => console.log('√ Postgres connected'))
    .catch(err => console.log('Unable to connect to the database:', err))
  }

  const seedDB = (models) => {
    sequelize
    .sync({ force: true })
    .then(() => seeder(models))
    .catch(err => console.log('An error occurred while creating the table:', err))
  }

  connect()
  testConnection()
  createModels()
  seedDB(db.models)
  db.sequelize = sequelize
}

if(!global.dbInitiated) initDB()
module.exports = db

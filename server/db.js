
let db = {}
function initDB() {
  global.dbInitated = true

  const Sequelize = require('sequelize')
  let seeder = require('./seeder')
  let sequelize

  const connect = () => {
    if(process.env.NODE_ENV === 'production') {
      console.log('App in Production...')
      sequelize = new Sequelize(
        process.env.REACT_APP_DB_URL,
        {
          dialect:  'postgres',
          protocol: 'postgres',
          logging:  true
        }
      )
    } else {
      console.log('App in Development...')
      sequelize = new Sequelize(
        process.env.REACT_APP_DB_URL,
        process.env.REACT_APP_DB_USER,
        process.env.REACT_APP_DB_PASS,
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
    .then(REACT_APP_DB_PASS => console.log('√ Postgres connected'))
    .catch(err => console.log('Unable to connect to the database:', err))
  }

  const seedDB = (models) => {
    sequelize
    .sync({ force: true })
    .then(res => seeder(models))
    .catch(err => console.log('An error occurred while creating the table:', err))
  }

  connect()
  testConnection()
  createModels()
  seedDB(db.models)
  db.Sequelize = Sequelize
  db.sequelize = sequelize
}

if(!global.hasOwnProperty('dbInitiated')) initDB()
module.exports = db

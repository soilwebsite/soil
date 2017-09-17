
let db = {}
const initDB = () => {
  global.dbInitiated = true

  const Sequelize = require('sequelize')
  let seeder = require('./seeder')
  let sequelize

  const connect = () => {
    if(process.env.NODE_ENV === 'production') {
      console.log('********** Connecting to Production DB **********')
      sequelize = new Sequelize(
        process.env.DB_NAME,
        process.env.DB_USER,
        process.env.DB_PASS,
        {
          dialect:  'postgres',
          protocol: 'postgres',
          port: process.env.DB_PORT,
          host: process.env.DB_HOST,
          logging:  true
        }
      )
    } else {
      console.log('********** Connecting to Development DB **********')
      sequelize = new Sequelize(
        process.env.DB_NAME,
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
    let Image = sequelize.import(__dirname + '/models/image')

    db.models = {
      User,
      Product,
      Tag,
      Image
    }
  }

  const createAssociations = () => {
    let { Product, Tag, Image } = db.models
    Product.belongsToMany(Tag, { through: 'products_tags' })
    Tag.belongsToMany(Product, { through: 'products_tags' })

    Product.belongsToMany(Image, { through: 'products_images' })
    Image.belongsToMany(Product, { through: 'products_images' })

    Tag.belongsToMany(Image, { through: 'images_tags' })
    Image.belongsToMany(Tag, { through: 'images_tags' })
  }

  const testConnection = () => {
    sequelize
    .authenticate()
    .then(() => console.log('√√√ √√√ √√√ Postgres connected √√√ √√√ √√√'))
    .catch(err => console.log('Unable to connect to the database:', err))
  }

  const seedDB = () => {
    sequelize
    .sync({ force: true })
    .then(() => seeder(db.models))
    .catch(err => console.log('An error occurred while creating the table:', err))
  }

  connect()
  testConnection()
  createModels()
  createAssociations()
  seedDB()
  db.sequelize = sequelize
}

if(!global.dbInitiated) initDB()
module.exports = db

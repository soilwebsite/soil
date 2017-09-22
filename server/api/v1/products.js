// const models = require('../../models')

// module.exports = (req, res) => {
//   models.Product.findAll({ include: [models.Tag, models.Image] }).then(function(data) {
//     return res.json(data)
//   })
// }

// /////////////////////////////////////////////////////////////////////

const ShopifyBuy = require('shopify-buy')

// const shopClient = ShopifyBuy.buildClient({
//   // accessToken: '425cd197328dc6141d62c4286514017e',
//   accessToken: '9c27c8e7ff34041264bf211ee99b4e6c', // correct
//   appId: '66073327', // '6',
//   domain: 'virginsoil.myshopify.com'
// })

const shopClient = ShopifyBuy.buildClient({
  accessToken: 'bf081e860bc9dc1ce0654fdfbc20892d',
  appId: '6',
  domain: 'embeds.myshopify.com'
})

let cache
module.exports = (req, res) => {
  console.log('cached: products')
  if(cache) return res.json(cache)
  console.log('not using cache: products')
  return shopClient.fetchAllProducts() // '104356577307'
  .then(products => {
    cache = products.map(p => p.attrs)
    res.json(cache)
  })
  .catch(err => console.log(err))
}

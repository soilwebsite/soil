// const models = require('../../models')

// module.exports = (req, res) => {
//   models.Product.findAll({ include: [models.Tag, models.Image] }).then(function(data) {
//     return res.json(data)
//   })
// }

// /////////////////////////////////////////////////////////////////////
const ShopifyBuy = require('shopify-buy')
const conf = new ShopifyBuy.Config({
  apiKey: '45ea54cfba808104dd0550457a20f159',
  appId: '6',
  domain: 'virginsoil.myshopify.com'
})
const client = ShopifyBuy.buildClient(conf)

let cache
setInterval(() => cache = null, 1800000) // 30 min cache
module.exports = (req, res) => {
  if(cache) return res.json(cache)
  client.fetchAllProducts()
    .then(products => {
      cache = products.map(p => p.attrs)
      res.json(cache)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}
// client.fetchProduct('110986723355') // my

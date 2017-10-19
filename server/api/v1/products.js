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

const looksCollectionId = 9633398811
const productsCollectionId = 5052661787

let cache
setInterval(() => (cache = null), 1800000) // 30 min cache
module.exports = (req, res) => {
  if (cache) return res.json(cache)

  Promise.all([
    client.fetchQueryProducts({ collection_id: looksCollectionId }),
    client.fetchQueryProducts({ collection_id: productsCollectionId })
  ])
    .then(data => {
      cache = {
        looks: data[0].map(p => p.attrs),
        products: data[1].map(p => p.attrs)
      }
      return res.json(cache)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json(err)
    })
}
// client.fetchProduct('110986723355') // my

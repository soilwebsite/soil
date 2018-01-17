// https://shopify.github.io/js-buy-sdk/
const Client = require('shopify-buy')
const client = Client.buildClient({
  domain: 'soilwebsite.myshopify.com',
  storefrontAccessToken: 'c48a9b276c10b85d0186e960f090cec8'
})
// collections
const preFall2018 = 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzM1NTEyMDI1MTMw'

// cache
let cache
let backup
setInterval(() => (cache = null), 30 * 60 * 1000)

export default () => {
  if (cache) return cache
  // Promise.all([client.collection.fetchWithProducts(preFall2018)]) // multiple collections
  return (
    client.collection
      // .fetchAllWithProducts() // find your collection ID with this
      .fetchWithProducts(preFall2018)
      .then(res => {
        cache = { preFall2018: res }
        localStorage.setItem('collections', JSON.stringify(cache))
        return cache
      })
      .catch(err => {
        console.error(err)
        return backup
      })
  )
}

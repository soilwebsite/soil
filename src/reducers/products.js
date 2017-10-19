import { keyBy, uniq } from 'lodash'
const defaults = { isFetching: true }

const products = (state = defaults, action) => {
  switch (action.type) {
    case 'REQUEST_PRODUCTS':
      return Object.assign({}, state, {
        isFetching: true
      })
    case 'RECEIVE_PRODUCTS':
      let { products, looks } = action.data
      return Object.assign({}, state, {
        isFetching: false,
        looks: looks,
        data: products,
        byHandle: keyBy(products, 'handle'),
        looksByHandle: keyBy(looks, 'handle'),
        productTypes: uniq(products.map(p => p.product_type)),
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default products

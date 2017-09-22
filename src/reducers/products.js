import { keyBy } from 'lodash'
const defaults = { isFetching: true }

const products = (state = defaults, action) => {
  switch (action.type) {
  case 'REQUEST_PRODUCTS':
    return Object.assign({}, state, {
      isFetching: true
    })
  case 'RECEIVE_PRODUCTS':
    return Object.assign({}, state, {
      isFetching: false,
      data: action.products,
      byHandle: keyBy(action.products, 'handle'),
      lastUpdated: action.receivedAt
    })
  default:
    return state
  }
}

export default products

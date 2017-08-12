const defaults = { isFetching: true, products: {} }

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
      lastUpdated: action.receivedAt
    })
  default:
    return state
  }
}

export default products

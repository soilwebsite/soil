const products = (state = { isFetching: false, products: [] }, action) => {
  switch (action.type) {
    case "REQUEST_PRODUCTS":
      return Object.assign({}, state, {
        isFetching: true,
      })
    case "RECEIVE_PRODUCTS":
      return Object.assign({}, state, {
        isFetching: false,
        products: action.products,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

export default products

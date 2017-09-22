const defaults = { isFetching: true }

const images = (state = defaults, action) => {
  switch (action.type) {
  case 'REQUEST_IMAGES':
    return Object.assign({}, state, {
      isFetching: true
    })
  case 'RECEIVE_IMAGES':
    return Object.assign({}, state, {
      isFetching: false,
      data: action.images,
      lastUpdated: action.receivedAt
    })
  default:
    return state
  }
}

export default images

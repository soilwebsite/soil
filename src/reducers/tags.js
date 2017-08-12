const defaults = { isFetching: true, tags: {} }

const tags = (state = defaults, action) => {
  switch (action.type) {
  case 'REQUEST_TAGS':
    return Object.assign({}, state, {
      isFetching: true
    })
  case 'RECEIVE_TAGS':
    return Object.assign({}, state, {
      isFetching: false,
      data: action.tags,
      lastUpdated: action.receivedAt
    })
  default:
    return state
  }
}

export default tags

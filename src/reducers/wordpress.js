const defaults = { isFetching: true, posts: {} }

const posts = (state = defaults, action) => {
  switch (action.type) {
  case 'REQUEST_POSTS':
    return Object.assign({}, state, {
      isFetching: true
    })
  case 'RECEIVE_POSTS':
    return Object.assign({}, state, {
      isFetching: false,
      data: action.posts,
      lastUpdated: action.receivedAt
    })
  default:
    return state
  }
}

export default posts

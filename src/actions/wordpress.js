//
import fetch from 'isomorphic-fetch'
const requestPosts = () => ({ type: 'REQUEST_POSTS' })
const receivePosts = posts => ({
  type: 'RECEIVE_POSTS',
  receivedAt: Date.now(),
  posts
})

const wpUrl = 'https://public-api.wordpress.com/rest/v1/sites/impressions.baikhal.com'

export const fetchPosts = () => dispatch => {
  dispatch(requestPosts())
  return fetch(`${wpUrl}/posts`)
    .then(res => res.json())
    .then(posts => dispatch(receivePosts(posts)))
    .catch(err => console.log('err', err))
}

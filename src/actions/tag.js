import fetch from 'isomorphic-fetch'

const requestTags = () => ({ type: 'REQUEST_TAGS' })
const receiveTags = (tags) => ({
  type: 'RECEIVE_TAGS',
  tags,
  receivedAt: Date.now()
})

export const fetchTags = () => (dispatch) => {
  dispatch(requestTags())
  return fetch(`${process.env.REACT_APP_API_DOMAIN}/tags`)
    .then(res => res.json())
    .then(tags => dispatch(receiveTags(tags)))
    .catch(err => console.log('err', err))
}

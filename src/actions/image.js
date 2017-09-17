// http://redux.js.org/docs/advanced/AsyncActions.html

import fetch from 'isomorphic-fetch'

const requestImages = () => ({ type: 'REQUEST_IMAGES' })
const receiveImages = (images) => ({
  type: 'RECEIVE_IMAGES',
  images,
  receivedAt: Date.now()
})

export const fetchImages = () => (dispatch) => {
  dispatch(requestImages())
  return fetch(`${process.env.REACT_APP_API_DOMAIN}/images`)
    .then(res => res.json())
    .then(images => dispatch(receiveImages(images)))
    .catch(err => console.log('err', err))
}

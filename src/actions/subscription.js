// http://redux.js.org/docs/advanced/AsyncActions.html

import fetch from 'isomorphic-fetch'
const requestSubscription = () => ({ type: 'REQUEST_SUBSCRIPTION' })
const receiveSubscription = (subscription) => ({
  type: 'RECEIVE_SUBSCRIPTION',
  receivedAt: Date.now(),
  subscription
})

export const subscribeUser = () => dispatch => {
  dispatch(requestSubscription())
  return fetch(`${process.env.REACT_APP_API_DOMAIN}/subscription`, {
    method: 'POST',
    body: { email: 'jacobnelken@gmail.com' },
    headers: { "content-type": "application/json" }
  })
    .then(res => res.json())
    .then(subscription => dispatch(receiveSubscription(subscription)))
    .catch(err => console.log('err', err))
}

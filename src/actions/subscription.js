// http://redux.js.org/docs/advanced/AsyncActions.html

import fetch from 'isomorphic-fetch'

const requestSubscription = () => ({ type: 'REQUEST_SUBSCRIPTION' })
// const receiveSubscription = subscription => ({
//   type: 'RECEIVE_SUBSCRIPTION',
//   receivedAt: Date.now(),
//   subscription
// })

export const subscribeUser = email => dispatch => {
  dispatch(requestSubscription())
  return fetch(`${process.env.REACT_APP_API_DOMAIN}/subscription`, {
    method: 'POST',
    body: JSON.stringify({ email }),
    headers: { 'Content-Type': "application/json" }
  })
    .then(res => console.log('successfully subscribed'))
    .catch(err => console.log('err', err))
}

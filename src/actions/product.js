// http://redux.js.org/docs/advanced/AsyncActions.html

import config from '../../app-config'
import fetch from 'isomorphic-fetch'
const requestProducts = () => ({ type: 'REQUEST_PRODUCTS' })
const receiveProducts = (products) => ({
    type: 'RECEIVE_PRODUCTS',
    products,
    receivedAt: Date.now()
})

export const fetchProducts = () => (dispatch) => {
  dispatch(requestProducts())
  return fetch(`${config.apiDomain}/products`)
    .then(res => res.json())
    .then(products => dispatch(receiveProducts(products)))
    .catch(err => console.log('err', err));
}

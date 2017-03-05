// http://redux.js.org/docs/advanced/AsyncActions.html

import fetch from 'isomorphic-fetch'
const requestProducts = () => ({ type: 'REQUEST_PRODUCTS' })
const receiveProducts = (products) => ({
    type: 'RECEIVE_PRODUCTS',
    products,
    receivedAt: Date.now()
})

export const fetchProducts = () => (dispatch) => {
  dispatch(requestProducts())
  return fetch(`${process.env.REACT_APP_API_DOMAIN}/products`)
    .then(res => res.json())
    .then(products => dispatch(receiveProducts(products)))
    .catch(err => console.log('err', err));
}

const REQUEST_PRODUCTS = 'REQUEST_PRODUCTS'
const RECEIVE_PRODUCTS = 'RECEIVE_POSTS'

const requestProducts = () => {
  return {
    type: REQUEST_PRODUCTS
  }
}

const receiveProducts = (json) => {
  return {
    type: RECEIVE_PRODUCTS,
    products: json.data.children.map(child => child.data),
    receivedAt: Date.now()
  }
}

export function fetchPosts() {
  console.log('fetchPosts');
  // Thunk middleware knows how to handle functions.
  // It passes the dispatch method as an argument to the function,
  // thus making it able to dispatch actions itself.
  return function (dispatch) {
    // First dispatch: the app state is updated to inform
    // that the API call is starting.
    dispatch(requestProducts())
    // The function called by the thunk middleware can return a value,
    // that is passed on as the return value of the dispatch method.

    // In this case, we return a promise to wait for.
    // This is not required by thunk middleware, but it is convenient for us.
          // return db.Product.findAll()
          //   .then(data => {
          //     console.log('data[0].dataValues');
          //     console.log(data[0].dataValues);
          //     dispatch(receiveProducts(data))
          //   })
          //   .catch(err => console.log(err));

    // return fetch(`https://www.reddit.com/r/${subreddit}.json`)
    //   .then(response => response.json())
    //   .then(json =>
    //
    //     // We can dispatch many times!
    //     // Here, we update the app state with the results of the API call.
    //
    //     dispatch(receiveProducts(subreddit, json))
    //   )
    //
    //   // In a real world app, you also want to
    //   // catch any error in the network call.
  }
}

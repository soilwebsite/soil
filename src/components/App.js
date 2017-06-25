import React, { Component } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import store from '../store'
import { fetchProducts } from '../actions/product'
import { fetchTags } from '../actions/tag'


class App extends Component {

  constructor () {
    super()
    this.state = store.getState()
  }

  componentDidMount () {
    store.dispatch(fetchProducts())
    .then(() => store.dispatch(fetchTags()))
    .then(() => {
      console.log(store.getState())
      this.setState(store.getState())
    })
    fetch(`${process.env.REACT_APP_API_DOMAIN}/subscription`, {
      method: 'POST',
      body: { email: 'jacobnelken@gmail.com' },
      headers: { "content-type": "application/json" }
    })
    .then(res => console.log(res.json()))
    .catch(err => console.log(err))
  }

  render() {
    return (
        <div className="App">
          <Navbar location={this.props.location} />
          {React.cloneElement(
            this.props.children,
            { ...this.props, ...this.state }
          )}
          <Footer />
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react'
import Navbar from './Navbar'
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
  }

  render() {
    return (
        <div className="App">
          <Navbar location={this.props.location} />
          {React.cloneElement(
            this.props.children,
            { ...this.props, ...this.state }
          )}
        </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import Navbar from './Navbar';
import store from '../store'
import { fetchProducts } from '../actions/product'


class App extends Component {

  constructor () {
    super()
    this.state = store.getState()
  }

  componentDidMount () {
    store.dispatch(fetchProducts())
    .then(() => this.setState(store.getState()))
  }

  render() {
    if (this.state.products.isFetching) { return <div>Loading</div> }

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

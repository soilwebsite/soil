import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';

class Clothing extends Component {
  state = { filter: '' }
  setFilter (tag) {
    this.setState({ filter: tag })
  }
  render() {
    if (!this.props.tags) { return null }
    return <div className="Clothing">
      <Sidebar items={this.props.tags.tags} setFilter={this.setFilter.bind(this)} />
      <ProductGrid products={this.props.products.products} filter={this.state.filter} />
    </div>
  }
}

export default Clothing;

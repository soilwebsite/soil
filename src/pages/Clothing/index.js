import React, { Component } from 'react';
import Sidebar from '../../components/Sidebar';
import ProductGrid from '../../components/ProductGrid';

class Clothing extends Component {
  state = { filter: '' }
  setFilter (tag) {
    this.setState({ filter: (tag === 'All' ? null : tag) })
  }
  render() {
    if (!this.props.tags || !this.props.tags.data) { return null }
    return <div className="Clothing">
      <Sidebar items={this.props.tags.data} setFilter={this.setFilter.bind(this)} />
      <ProductGrid products={this.props.products.data} filter={this.state.filter} />
    </div>
  }
}

export default Clothing;

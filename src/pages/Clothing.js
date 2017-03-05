import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';
import ProductGrid from '../components/ProductGrid';

const sidebarItems = [
  { name: 'Tops' },
  { name: 'Bottoms' },
  { name: 'Dresses' },
  { name: 'Outerwear', onClick: null },
  { name: 'Accessories' }
]

class Clothing extends Component {
  render() {
    console.log('itmes', this.props.tags);
    if (!this.props.tags) { return null }
    return (
      <div className="Clothing">
        <Sidebar items={this.props.tags.tags} />
        <ProductGrid products={this.props.products.products} />
      </div>
    );
  }
}

export default Clothing;

import React, { Component } from 'react';
import {shuffle} from 'lodash';
import Product from './ProductItem';

class ProductGrid extends Component {
  items () {
    const {products, filter} = this.props
    let manyImages = shuffle(products.concat(products).concat(products).concat(products))
    if (filter) manyImages = manyImages.filter(i => i.tags.find(t => t.name === filter))
    return manyImages.map((item, i) => <Product key={i} item={item} />)
  }
  render() {
    return <div className="ProductGrid">
      {this.items()}
    </div>
  }
}

export default ProductGrid

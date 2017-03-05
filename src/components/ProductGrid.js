import React, { Component } from 'react';
import {shuffle} from 'lodash';
import Product from './ProductItem';

class ProductGrid extends Component {
  render() {
    const {products} = this.props;
    const manyImages = shuffle(products.concat(products).concat(products).concat(products));

    return <div className="ProductGrid">
      {manyImages.map((item, i) => <Product key={i} item={item} />)}
    </div>
  }
}

export default ProductGrid

import React, { Component } from 'react';
import {shuffle} from 'lodash';
import Product from '../ProductItem';

class ProductGrid extends Component {
  render() {
    const {images} = this.props;
    const manyImages = shuffle(images.concat(images).concat(images).concat(images));

    return <div className="ProductGrid">
      {manyImages.map((item, i) => <Product key={i} item={item} />)}
    </div>
  }
}

export default ProductGrid

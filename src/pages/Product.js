import React, { Component } from 'react';
import ProductDetail from '../components/ProductDetail'

class Product extends Component {

  constructor (props) {
    super(props)
    let id = Number(this.props.location.pathname.split('/clothing/')[1])
    this.state = { item: this.props.products.products.find(p => p.id === id) }
  }

  render() {
    return (
      <div className="Product">
        <ProductDetail item={this.state.item} />
      </div>
    );
  }
}

export default Product;

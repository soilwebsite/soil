import React, { Component } from 'react'
import ProductDetail from '../components/ProductDetail'

class Product extends Component {

  constructor(props) {
    super(props)
    let id = Number(props.location.pathname.split('/clothing/')[1])
    this.state = { item: props.products.data.find(p => p.id === id) }
  }

  render() {
    return (
      <div className="Product">
        <ProductDetail item={this.state.item} />
      </div>
    )
  }
}

export default Product

import React, { Component } from 'react'
import ProductGrid from '../../components/ProductGrid'

class Shop extends Component {

  items() {
    let products = this.props.products.data
    return products.map((item, i) => <ProductGrid key={i} item={item} />)
  }

  render() {
    if(!this.props.tags || !this.props.tags.data) { return null }
    return (
      <div className="Shop">
        {this.items()}
      </div>
    )
  }
}

export default Shop

import React, { Component } from 'react'

class ProductDetail extends Component {
  render() {
    const { item } = this.props
    return (<div className="ProductDetail">
      <img src={item.imageUrl} alt={item.name} />
      {item.name}
      {item.tags ? item.tags.map(tag => <p key={tag.name}>#{tag.name}</p>) : null}
    </div>)
  }
}

export default ProductDetail

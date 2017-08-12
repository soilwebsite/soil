import React, { Component } from 'react'
import { Link } from 'react-router'
import Spinner from '../components/Spinner'

class ProductItem extends Component {

  render() {
    const { item } = this.props
    if(!item) return <Spinner />
    return (
      <Link to={`/clothing/${item.id}`} className="ProductItem">
        <img src={item.imageUrl} alt={item.name} />
        <div className="info">
          <h3>{item.name}</h3>
          <strong>${Math.floor(Math.random() * 200)}</strong>
        </div>
      </Link>
    )
  }
}

export default ProductItem

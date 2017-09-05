import React from 'react'
import { Link } from 'react-router'
import Spinner from '../Spinner'

class BigProduct extends React.Component {
  render() {
    const { item } = this.props
    if(!item) return <Spinner />
    return (
      <Link to={`/shop/${item.id}`} className="BigProduct">
        <img src={item.imageUrl} alt={item.name} />
        <div className="info">
          <h3>{item.name}</h3>
          <p><strong>${Math.floor(Math.random() * 200 + 200)}</strong></p>
        </div>
      </Link>
    )
  }
}

export default BigProduct

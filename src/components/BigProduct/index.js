import React from 'react'
import { Link } from 'react-router'
import Spinner from '../Spinner'

class BigProduct extends React.Component {
  render() {
    const { item } = this.props
    if (!item) return <Spinner />
    let imageUrl = 'https://cdn3.yoox.biz/cloud/stellawp/uploads/2017/05/forth.jpg' // item.imageUrl
    return (
      <Link to={`/clothing/${item.id}`} className='BigProduct'>
        <img src={imageUrl} alt={item.name} />
        <div className='info'>
          <h3>{item.name}</h3>
          <p><strong>${Math.floor(Math.random()*200)}</strong></p>
        </div>
      </Link>
    );
  }
}

export default BigProduct

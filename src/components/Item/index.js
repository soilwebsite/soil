import React from 'react'
import Spinner from '../Spinner'
import { Item, Info } from './ui'

export default ({ item }) => {
  if(!item) return <Spinner />

  return (
    <Item to={`/shop/${item.handle}`}>
      <img src={item.images[0] && item.images[0].src} alt={item.name} />
      <Info className="info">
        <h3>{item.title}</h3>
        <strong>{item.variants[0].formatted_price}</strong>
      </Info>
    </Item>
  )
}

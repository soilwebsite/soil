import React from 'react'
import Spinner from '../Spinner'
import { Item, Info } from './ui'

export default ({ item }) => {
  if(!item) return <Spinner />

  return (
    <Item to={`/shop/${item.id}`}>
      <img src={item.images[0].url} alt={item.name} />
      <Info>
        <h3>{item.name}</h3>
        <strong>${Math.floor(Math.random() * 1000)}</strong>
      </Info>
    </Item>
  )
}

import React from 'react'
import Spinner from '../Spinner'
import { Item } from './ui'

export default ({ item }) => {
  if(!item) return <Spinner />

  return (
    <Item to={`/clothing/${item.id}`}>
      <img src={item.imageUrl} alt={item.name} />
      <div className="info">
        <h3>{item.name}</h3>
        <strong>${Math.floor(Math.random() * 1000)}</strong>
      </div>
      <div>
        <h3>{item.name}</h3>
        <strong>${Math.floor(Math.random() * 1000)}</strong>
      </div>
    </Item>
  )
}

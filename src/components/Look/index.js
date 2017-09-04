import React from 'react'
import Spinner from '../Spinner'
import { LookWrap, Look, Info } from './ui'

export default ({ item }) => {
  if(!item) return <Spinner />

  return (
    <LookWrap>
      <Look to={`/clothing/${item.id}`}>
        <img src={item.imageUrl} alt={item.name} />
        <Info className="info">
          <h3>Shop This Look</h3>
        </Info>
      </Look>
    </LookWrap>
  )
}

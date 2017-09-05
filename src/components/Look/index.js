import React from 'react'
import Spinner from '../Spinner'
import { LookWrap, Look, Info } from './ui'

export default ({ item, onClick }) => {

  if(!item) return <Spinner />

  return (
    <LookWrap>
      <Look onClick={onClick}>
        <img src={item.imageUrl} alt={item.name} />
        <Info className="info">
          <h3>Shop This Look</h3>
        </Info>
      </Look>
    </LookWrap>
  )
}

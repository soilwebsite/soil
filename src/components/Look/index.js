import React from 'react'
import Spinner from '../Spinner'
import { LookWrap, Look, Info } from './ui'

export default ({ item, i, onClick }) => {

  let src = item.images[0].url
  if(!src) return <Spinner />

  return (
    <LookWrap>
      <Look onClick={onClick}>
        <img src={src} alt={src} />
        <Info className="info">
          <h3>{item.name}</h3>
          {/* <h3>Shop This Look</h3> */}
        </Info>
      </Look>
    </LookWrap>
  )
}

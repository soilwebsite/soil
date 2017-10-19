import React from 'react'
import { Container, Look, Info } from './ui'
import { isNumber } from 'lodash'

export default ({ item, i, onClick }) => {
  if (isNumber(item)) return <Container dummy />
  let src = item.images[0].src

  return (
    <Container i={i}>
      <Look onClick={onClick}>
        <img src={src} alt={src} />
        <Info className="info">
          <h3>{item.name}</h3>
          {/* <h3>Shop This Look</h3> */}
        </Info>
      </Look>
    </Container>
  )
}

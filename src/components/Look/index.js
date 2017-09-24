import React from 'react'
import Spinner from '../Spinner'
import { LookWrap, Look, Info } from './ui'

export default ({ src, i, onClick }) => {

  if(!src) return <Spinner />

  return (
    <LookWrap>
      <Look onClick={onClick}>
        <img src={src} alt={src} />
        {/* <Info className="info">
          <h3>Shop This Look</h3>
        </Info> */}
      </Look>
    </LookWrap>
  )
}

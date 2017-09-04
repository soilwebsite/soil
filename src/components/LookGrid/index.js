import React from 'react'
import { shuffle } from 'lodash'
import Look from '../Look'
import Spinner from '../Spinner'
import { ItemGrid } from './ui'

export default (props) => {

  function getItems() {
    const { items, filter } = props
    let manyImages = shuffle(items.concat(items).concat(items).concat(items))
    if(filter) manyImages = manyImages.filter(i => i.tags.find(t => t.name === filter))
    return manyImages.map((item, i) => <Look key={i} item={item} />)
  }

  let content = getItems()
  if(content.length === 0) return <Spinner />

  return (
    <ItemGrid>
      {content}
    </ItemGrid>
  )
}

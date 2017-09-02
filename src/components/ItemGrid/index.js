import React from 'react'
import { shuffle } from 'lodash'
import Item from '../Item'
import Spinner from '../Spinner'
import { ItemGrid } from './ui'

export default (props) => {

  function getItems() {
    const { items, filter } = props
    let manyImages = shuffle(items.concat(items).concat(items).concat(items))
    if(filter) manyImages = manyImages.filter(i => i.tags.find(t => t.name === filter))
    return manyImages.map((item, i) => <Item key={i} item={item} />)
  }

  let content = getItems()
  if(content.length === 0) return <Spinner />

  return (
    <ItemGrid>
      <div>
        {content.slice(0, content.length / 2)}
      </div>
      <div>
        {content.slice(content.length / 2)}
      </div>
    </ItemGrid>
  )
}

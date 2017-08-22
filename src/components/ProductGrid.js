import React from 'react'
import { shuffle } from 'lodash'
import Product from './ProductItem'
import Spinner from './Spinner'

export default (props) => {

  function getItems() {
    const { products, filter } = props
    let manyImages = shuffle(products.concat(products).concat(products).concat(products))
    if(filter) manyImages = manyImages.filter(i => i.tags.find(t => t.name === filter))
    return manyImages.map((item, i) => <Product key={i} item={item} />)
  }

  let items = getItems()
  if(items.length === 0) return <Spinner />

  return (
    <div className="ProductGrid">
      {items}
    </div>
  )
}

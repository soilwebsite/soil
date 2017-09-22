import React, { Component } from 'react'
import ProductDetail from '../components/ProductDetail'
import Spinner from '../components/Spinner'

class Product extends Component {

  constructor(props) {
    super(props)
    this.handle = props.params.id
    let item
    if(props.products) {
      item = props.products.byHandle[this.handle]
    }
    this.state = { item }
  }

  componentWillReceiveProps(nextProps) {
    let item = nextProps.products.byHandle[this.handle]
    if(item !== this.state.item) {
      this.setState({ item })
    }
  }

  render() {
    let { item } = this.state
    if(!item) return <Spinner />
    return (
      <div className="Product">
        <ProductDetail item={item} />
      </div>
    )
  }
}

export default Product

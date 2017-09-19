import React, { Component } from 'react'
import ProductDetail from '../components/ProductDetail'
import Spinner from '../components/Spinner'

class Product extends Component {

  constructor(props) {
    super(props)
    this.id = Number(props.location.pathname.split('/shop/')[1])
    let item
    if(props.products) {
      item = props.products.data.find(p => p.id === this.id)
    }
    this.state = { item }
  }

  componentWillReceiveProps(nextProps) {
    let item = nextProps.products.data.find(p => p.id === this.id)
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

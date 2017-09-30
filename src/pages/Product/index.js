import React, { Component } from 'react'
import ProductDetail from '../../components/ProductDetail'
import Spinner from '../../components/Spinner'
import { Container } from './ui'

class Product extends Component {
  constructor(props) {
    super(props)
    this.handle = props.params.id
    this.state = { item: null }
  }

  componentWillReceiveProps(nextProps) {
    let item = nextProps.products.byHandle[this.handle]
    if (item !== this.state.item) {
      this.setState({ item })
    }
  }

  render() {
    let { item } = this.state
    if (!item) return <Spinner />
    return (
      <Container className="Product">
        <ProductDetail item={item} />
      </Container>
    )
  }
}

export default Product

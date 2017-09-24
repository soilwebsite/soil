import React, { Component } from 'react'
import shopifyWidget from './shopifyWidget'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  img {
    width: 30%;
  }
`

class ProductDetail extends Component {
  render() {
    const { item } = this.props

    return (
      <div id='product-component-1506116392081'>
        {shopifyWidget(item.product_id)}
      </div>
    )
    // return (
    //   <Container>
    //     <img src={item.images[0].src} alt={item.title} />
    //     {item.title}
    //     {item.tags ? item.tags.split(' ').map(tag => <span key={tag}>#{tag}</span>) : null}
    //   </Container>
    // )
  }
}

export default ProductDetail

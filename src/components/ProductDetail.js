import React, { Component } from 'react'
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
      <Container>
        <img src={item.images[0].url} alt={item.name} />
        {item.name}
        {item.tags ? item.tags.map(tag => <p key={tag.name}>#{tag.name}</p>) : null}
      </Container>
    )
  }
}

export default ProductDetail

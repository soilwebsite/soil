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
    console.log(item)
    // return (
    //   <div dangerouslySetInnerHTML={{__html: item.body_html}} /> // eslint-disable-line
    // )
    return (
      <Container>
        <img src={item.images[0].src} alt={item.title} />
        {item.title}
        {item.tags ? item.tags.split(' ').map(tag => <span key={tag}>#{tag}</span>) : null}
      </Container>
    )
  }
}

export default ProductDetail

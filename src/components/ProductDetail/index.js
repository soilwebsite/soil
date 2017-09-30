import React, { Component } from 'react'
// import shopifyWidget from './shopifyWidget'
import { Container, Previews, Preview, Image, Info, Description, Title } from './ui'

class ProductDetail extends Component {
  render() {
    const { item } = this.props

    // return (
    //   <div id='product-component-1506116392081'>
    //     {shopifyWidget(item.product_id)}
    //   </div>
    // )
    console.log(item)
    return (
      <Container>
        <Previews>{item.images.map(img => <Preview src={img.src} alt={item.title} />)}</Previews>
        <Image src={item.images[0].src} alt={item.title} />
        <Info>
          <Title>{item.title}</Title>
          {item.tags ? item.tags.split(' ').map(tag => <span key={tag}>#{tag}</span>) : null}
          <Description dangerouslySetInnerHTML={{ __html: item.body_html }} />
        </Info>
      </Container>
    )
  }
}

export default ProductDetail

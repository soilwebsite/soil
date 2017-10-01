import React, { Component } from 'react'
// import shopifyWidget from './shopifyWidget'
import {
  Container,
  Previews,
  Preview,
  MiniImg,
  Image,
  Info,
  Description,
  Vendor,
  Title,
  Text,
  Button
} from './ui'

class ProductDetail extends Component {
  constructor(props) {
    super(props)
    this.state = { variant: props.item.variants[0], imageIdx: 0 }
    this.addToBag = this.addToBag.bind(this)
    this.selectImage = this.selectImage.bind(this)
  }
  selectImage(imageIdx) {
    this.setState({ imageIdx })
  }
  addToBag() {
    console.log('add to bag')
  }
  render() {
    const { item } = this.props
    const { variant, imageIdx } = this.state

    console.log(item)
    return (
      <Container>
        <Previews>
          {item.images.map((img, i) => (
            <Preview active={i === imageIdx} key={i} onClick={() => this.selectImage(i)}>
              <MiniImg src={img.src} alt={item.title} />
            </Preview>
          ))}
        </Previews>
        <Image src={item.images[imageIdx].src} alt={item.title} />
        <Info>
          <Vendor>{item.vendor}</Vendor>
          <Title>{item.title}</Title>
          <Text>{variant.formatted_price}</Text>
          {variant.available ? (
            <Button onClick={this.addToBag}>Add To Bag</Button>
          ) : (
            <Text>Not Available</Text>
          )}
          {item.tags && item.tags.split(' ').map(tag => <span key={tag}>#{tag}</span>)}
          <Description dangerouslySetInnerHTML={{ __html: item.body_html }} />
        </Info>
      </Container>
    )
  }
}

export default ProductDetail

// return (
//   <div id='product-component-1506116392081'>
//     {shopifyWidget(item.product_id)}
//   </div>
// )

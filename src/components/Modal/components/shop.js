import React from 'react'
import styled from 'styled-components'
import { uniq } from 'lodash'

const margin = 30
const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 100%;
  width: 100%;
`

const Images = styled.div`
  display: flex;
  flex-direction: column;
  ${'' /* border: 1px solid lightgray; */};
`

const MiniImage = styled.div`
  cursor: pointer;
  border: 1px solid ${({ active }) => (active ? 'darkgray' : 'lightgray')};
  margin: 10px ${margin}px;
  width: 50px;
  height: 70px;
  background-image: url('${({ src }) => src}');
  background-repeat: no-repeat;
  background-size: cover;
`

const Image = styled.img`
  max-height: 100%;
  max-width: 400px;
`

const Details = styled.div`
  ${'' /* border: 1px solid lightgray; */} display: flex;
  align-items: flex-start;
  text-align: left;
  flex-direction: column;
  margin-left: ${margin}px;
  max-height: 500px;
  width: 300px;
  & < * {
    padding-right: 10px;
  }
`

const ShopifyInfo = styled.span`
  p {
    font-size: ${({ theme }) => theme.size.font.secondary}px;
    &:first-of-type {
      font-size: ${({ theme }) => theme.size.font.primary}px;
    }
  }
`

const Sku = styled.p`
  color: lightgrey;
  font-size: ${({ theme }) => theme.size.font.secondary}px;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: 0 }
    this.setActive = this.setActive.bind(this)
  }
  setActive(i) {
    this.setState({ active: i })
  }

  render() {
    let { title, images, variants, price, body_html } = this.props.item
    let { active } = this.state
    let skus = uniq(variants.map(({ sku }) => sku))
    return (
      <Container>
        <Images>
          {images.map(({ src }, i) => (
            <MiniImage key={i} src={src} active={active === i} onClick={() => this.setActive(i)} />
          ))}
        </Images>
        <Image src={images[active].src} />
        <Details>
          <h3>{title}</h3>
          {price && <span>Price: ${price}</span>}
          <ShopifyInfo dangerouslySetInnerHTML={{ __html: body_html }} />
          <Sku>Product Code: {skus.join(', ')}</Sku>
        </Details>
      </Container>
    )
  }
}

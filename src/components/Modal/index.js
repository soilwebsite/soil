import React from 'react'
import Spinner from '../Spinner'
import { Container, Content, Images, MiniImage, Close, Image, Details } from './ui'

export default class Modal extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: 0 }
    this.setActive = this.setActive.bind(this)
  }
  setActive(i) {
    this.setState({ active: i })
  }
  render() {
    if(!this.props.content) return <Spinner />
    let { name, images, price } = this.props.content
    let { active } = this.state
    return (
      <Container onClick={this.props.hideModal}>
        <Content onClick={e => { e.stopPropagation() }}>
          <Close name="close" />
          <Images>
            {images.map((img, i) =>
              <MiniImage
                key={i}
                url={img.url}
                active={active === i}
                onClick={() => this.setActive(i)}
              />
            )}
          </Images>
          <Image src={images[active].url} />
          <Details>
            <span>Item: {name}</span>
            <span>Price: ${price}</span>
          </Details>
        </Content>
      </Container>
    )
  }
}

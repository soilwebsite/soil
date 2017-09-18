import React from 'react'
import Spinner from '../Spinner'
import { Modal, Content, Icons, ImageIcon, Image, Details } from './ui'

export default class ModalClass extends React.Component {
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
    let { name, images } = this.props.content
    let { active } = this.state
    return (
      <Modal onClick={this.props.hideModal}>
        <Content onClick={e => { e.stopPropagation() }}>
          <Icons>
            {images.map((img, i) =>
              <ImageIcon
                key={i}
                url={img.url}
                active={active === i}
                onClick={() => this.setActive(i)}
              />
            )}
          </Icons>
          <Image src={images[active].url} />
          <Details>
            Item:{name}
          </Details>
        </Content>
      </Modal>
    )
  }
}

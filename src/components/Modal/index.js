import React from 'react'
import Spinner from '../Spinner'
import { Modal, Content, Image, Details } from './ui'

export default class ModalClass extends React.Component {

  render() {
    if(!this.props.content) return <Spinner />
    console.log(this.props.content)

    let { name, imageUrl } = this.props.content
    console.log(imageUrl)
    return (
      <Modal onClick={this.props.hideModal}>
        <Content onClick={e => { e.stopPropagation() }}>
          <Image src={imageUrl} />
          <Details>
            Item:{name}
          </Details>
        </Content>
      </Modal>
    )
  }
}

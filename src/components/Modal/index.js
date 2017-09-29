import React from 'react'
import { Container, Cloak, Content, Close } from './ui'

export default class Modal extends React.Component {
  render() {
    let { hideModal, children, custom } = this.props
    return (
      <Container onClick={hideModal}>
        <Cloak {...custom.cloak} />
        <Content onClick={e => e.stopPropagation()} {...custom.content}>
          <Close name="close" onClick={hideModal} {...custom.close} />
          {children}
        </Content>
      </Container>
    )
  }
}

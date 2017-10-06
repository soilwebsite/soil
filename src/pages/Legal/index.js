import React, { Component } from 'react'
import { Container, TextBtn } from './ui'
import TermsOfService from './terms'
import Privacy from './privacy'

class Legal extends Component {
  constructor() {
    super()
    this.state = { legal: 'terms' }
  }
  changeLegal(legal) {
    this.setState({ legal })
  }
  render() {
    let { legal } = this.state
    return (
      <Container>
        <TextBtn selected={legal === 'terms'} onClick={() => this.changeLegal('terms')}>
          Terms Of Service
        </TextBtn>
        |
        <TextBtn selected={legal === 'privacy'} onClick={() => this.changeLegal('privacy')}>
          Privacy Policy
        </TextBtn>
        {legal === 'terms' ? <TermsOfService /> : <Privacy />}
      </Container>
    )
  }
}

export default Legal

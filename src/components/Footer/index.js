import React, { Component } from 'react'
import store from '../../store'
import { subscribeUser } from '../../actions/subscription'
import Submit from '../Submit'
import { Container, Links, Texture, SubscriptionBox, EmailCapture } from './ui'

class Footer extends Component {
  constructor() {
    super()
    this.state = { email: '', message: '' }
    this.subscribeEmail = this.subscribeEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  subscribeEmail() {
    if (!this.state.email) alert('Please enter a valid email address')
    store.dispatch(subscribeUser(this.state.email)).then(res => {
      this.setState({ email: '', message: 'Thanks!' })
    })
  }

  render() {
    return (
      <Container className="Footer">
        <Links>
          <h3>
            <a href="/contact">Contact Us</a>
          </h3>
          <h3>
            <a href="/shipping-and-returns">Shipping & Returns</a>
          </h3>
          <h3>
            <a href="/terms-and-privacy">Terms & Privacy</a>
          </h3>
          <h3>
            <a href="https://www.facebook.com/virginsoilus" target="blank">
              Facebook
            </a>
          </h3>
          <h3>
            <a href="https://www.instagram.com/virgin_soil" target="blank">
              Instagram
            </a>
          </h3>
        </Links>
        <SubscriptionBox>
          <div>{this.state.message}</div>
          <EmailCapture>
            <input
              type="email"
              value={this.state.value}
              onChange={this.handleChange}
              placeholder="Stay in touch"
            />
            <Submit handleSubmit={this.subscribeEmail} />
          </EmailCapture>
        </SubscriptionBox>
        <Texture>
          <div />
        </Texture>
      </Container>
    )
  }
}

export default Footer

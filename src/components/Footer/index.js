import React, { Component } from 'react'
import store from '../../store'
import { subscribeUser } from '../../actions/subscription'
import Submit from '../Submit'
import { Container, Texture, EmailCapture } from './ui'

class Footer extends Component {

  constructor() {
    super()
    this.state = { email: '' }
    this.subscribeEmail = this.subscribeEmail.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    this.setState({ email: event.target.value })
  }

  subscribeEmail() {
    if(!this.state.email) alert('Please enter a valid email address')
    store.dispatch(subscribeUser(this.state.email))
    .catch(err => console.log(err))
  }

  render() {

    return (
      <Container className="Footer">
        <Texture />
        <div>
          <h3>Care</h3>
          <p><a href="/">Shipping</a></p>
          <p><a href="/">Returns & Exchanges</a></p>
          <p><a href="/">Contact</a></p>
        </div>
        <div>
          <h3>Helpful Info</h3>
          <p><a href="/">Terms & Conditions</a></p>
          <p><a href="/">Privacy Policy</a></p>
          <p><a href="/">FAQ</a></p>
        </div>
        <div>
          <h3>Befriend</h3>
          <p>
            <a
              href="https://www.instagram.com/virgin_soil"
              target="blank"
            >
              Instagram
            </a>
          </p>
          <p>
            <a
              href="https://www.facebook.com/virginsoilus"
              target="blank"
            >
              Facebook
            </a>
          </p>
        </div>
        <div>
          <h3>Stay In Touch</h3>
          <EmailCapture>
            <input type="email" value={this.state.value} onChange={this.handleChange} />
            <Submit handleSubmit={this.subscribeEmail} />
          </EmailCapture>
        </div>
      </Container>
    )
  }
}

export default Footer

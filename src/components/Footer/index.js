import React, { Component } from 'react'
import store from '../../store'
import { subscribeUser } from '../../actions/subscription'
import { Container, Links, Texture } from './ui'

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
    const path = this.props.location.pathname
    const showBorder = path !== '/collection'
    return (
      <Container showBorder={showBorder} className="Footer">
        <Links>
          <div>
            <h3>
              <a href="/contact">Contact Us</a>
            </h3>
            {/* <h3>
            <a href="/shipping-and-returns">Shipping & Returns</a>
          </h3>
          <h3>
            <a href="/terms-and-privacy">Terms & Privacy</a>
          </h3> */}
            <h3>
              <a href="/about">About</a>
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
          </div>
        </Links>
        <Texture>
          <div />
        </Texture>
      </Container>
    )
  }
}

export default Footer

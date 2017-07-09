import React, { Component } from 'react';
import Submit from '../Submit'

import { EmailCapture } from './ui'

class Footer extends Component {

  constructor() {
    super()
    this.state = { email: '' }
  }

  handleChange(v) {
    this.setState({ email: v })
  }

  handleSubmit() {
    // subscribe email
  }

  render() {

    return (
      <div className="Footer">
        <div>
          <h3>Care</h3>
          <p><a href="/">Shipping</a></p>
          <p><a href="/">Returns & Exchanges</a></p>
          <p><a href="/">Contact</a></p>
        </div>
        <div>
          <h3>About</h3>
          <p><a href="/">Terms & Conditions</a></p>
          <p><a href="/">Privacy Policy</a></p>
          <p><a href="/">FAQ</a></p>
        </div>
        <div>
          <h3>Befriend</h3>
          <p><a
            href="https://www.instagram.com/baikhalofficial"
            target="blank"
          >
            Instagram
          </a></p>
          <p><a href="/">Facebook</a></p>
        </div>
          <div>
          <h3>Stay In Touch</h3>
          <EmailCapture>
            <input type="email" value={this.state.value} onChange={this.handleChange} />
            <Submit handleSubmit={this.handleSubmit} />
          </EmailCapture>
          </div>
      </div>
    );
  }
}

export default Footer

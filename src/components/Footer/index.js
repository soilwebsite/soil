import React, { Component } from 'react';
import Submit from '../Submit'

class Footer extends Component {

  constructor() {
    super()
    this.state = { email: '' }
  }

  handleChange(v) {
    this.setState({ email: v })
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
          <h3>Find Us On</h3>
          <p><a
            href="https://www.instagram.com/baikhalofficial"
            target="blank"
          >
            Instagram
          </a></p>
          <p><a href="/">Facebook</a></p>
        </div>
        <div className="email-capture">
          <h3>Updates</h3>
          <input type="email" value={this.state.value} onChange={this.handleChange} />
          <Submit handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Footer

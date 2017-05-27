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
          <h3>Customer Care</h3>
          <p><a>Shipping</a></p>
          <p><a>Returns</a></p>
          <p><a>FAQ</a></p>
        </div>
        <div>
          <h3>Follow Us</h3>
          <p><a>Instagram</a></p>
          <p><a>Twitter</a></p>
        </div>
        <div className="email-capture">
          <h3>Register For Updates</h3>
          <input type="email" value={this.state.value} onChange={this.handleChange} />
          <Submit handleSubmit={this.handleSubmit} />
        </div>
      </div>
    );
  }
}

export default Footer

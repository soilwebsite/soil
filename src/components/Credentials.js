import React, { Component } from 'react';

class Credentials extends Component {

  constructor () {
    super()
    this.handleSignin = this.handleSignin.bind(this)
    this.handleSignup = this.handleSignup.bind(this)
  }

  handleSignin () {
    alert("Logging in...")
  }

  handleSignup () {
    alert("Joining Tribe...")
  }

  render() {
    return (
      <div className="Credentials">
        <div className='signin'>
          <h1>Sign In</h1>
  				<p>
  					<label htmlFor="login-email">Email</label>
  					<input id="login-email" name="email" required="required" type="email"/>
  				</p>
  				<p>
  					<label htmlFor="login-password" className="youpasswd" data-icon="p">Password </label>
  					<input id="login-password" name="password" required="required" type="password" />
  				</p>
          <p>
            <div id='button' onClick={this.handleSignin}>Submit</div>
            <a className='forgot' href='#'>Forgot?</a>
          </p>
        </div>
        <div className='signup'>
          <h1>Join The Tribe</h1>
  				<p>
  					<label htmlFor="email" data-icon="u" >Email </label>
  					<input id="email" name="email" required="required" type="email" placeholder="eg. me@email.com"/>
  				</p>
  				<p>
  					<label htmlFor="password" data-icon="p">Password </label>
  					<input id="password" name="password" required="required" type="password" placeholder="eg. CantGu3ssTh1s" />
  				</p>
  				<p>
  					<label htmlFor="retype-password" data-icon="p">Re-type password </label>
  					<input id="retype-password" name="retype password" required="required" type="password" />
  				</p>
          <p>
            <div id='button' onClick={this.handleSignup}>Submit</div>
          </p>
        </div>
      </div>
    );
  }
}

export default Credentials;

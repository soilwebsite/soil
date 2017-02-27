import React, { Component } from 'react';

class Footer extends Component {
  render() {
    const {pathname} = this.props.location;

    return (
      <div class="container">
        <h3>Contact or Follow</h3>
              <div class="text-center center-block">
                <ul>
              <li><a href="https://www.facebook.com/bootsnipp"><i id="social-fb" class="fa fa-facebook-square fa-3x social"></i></a></li>
	            <a href="https://twitter.com/bootsnipp"><i id="social-tw" class="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" class="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" class="fa fa-envelope-square fa-3x social"></i></a>
              </ul>
    </div>
      </div>
    );
  }
}

export default Footer

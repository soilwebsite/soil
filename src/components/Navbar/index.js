import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const {pathname} = this.props.location;

    return (
      <div className="nav-bar">
        <nav id="nav">
          <div id="nav_background"></div>
          <a className="nav_item title" href="/">
            <b><h1>Forest Tribe</h1></b>
          </a>
          <a className={`nav_item${pathname === '/woman' ? ' current' : ''}`} href="/woman">woman</a>
          <a className={`nav_item${pathname === '/dusty' ? ' current' : ''}`} href="/dusty">dusty</a>
          <a className={`nav_item${pathname === '/about' ? ' current' : ''}`} href="/about">About</a>
          <a className={`nav_item${pathname === '/buy'   ? ' current' : ''}`} href="/buy">buy</a>
      </nav>
      </div>
    );
  }
}

export default Navbar

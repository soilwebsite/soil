import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    const pn = this.props.location.pathname;
    const onHomepage = pn === '/' ? 'on-homepage' : '';

    return <nav className={`Navbar ${onHomepage}`}>
      <a className="nav_item title" href="/">
        <strong><h1>Forest Tribe</h1></strong>
      </a>

      <div className='items'>
        <div className='left'>
          <a className={`nav_item${pn === '/clothing' ? ' current' : ''}`} href="/clothing">Clothing</a>
          <a className={`nav_item${pn === '/about'    ? ' current' : ''}`} href="/about">Who We Are</a>
          <a className={`nav_item${pn === '/mission'  ? ' current' : ''}`} href="/mission">Tribe Vibe</a>
        </div>
        <div className='right'>
          <a className={`nav_item${pn === '/signin'  ? ' current' : ''}`} href="/signin">Sign In</a>
          <a className={`nav_item${pn === '/cart'     ? ' current' : ''}`} href="/cart">Cart</a>
        </div>
      </div>
    </nav>
  }
}

export default Navbar

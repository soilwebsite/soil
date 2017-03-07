import React, { Component } from 'react'
import { Link } from 'react-router'

class Navbar extends Component {
  render() {
    const path = this.props.location.pathname;
    const onHomepage = path === '/' ? 'on-homepage' : '';

    return <nav className={`Navbar ${onHomepage}`}>
      <Link className="nav_item title" to="/">
        <strong><h1 >Forest Tribe</h1></strong>
      </Link>

      <div className='items'>
        <div className='middle'>
          <Link className={`nav_item${path === '/clothing' ? ' current' : ''}`} to="/clothing">Shop</Link>
          <Link className={`nav_item${path === '/about'    ? ' current' : ''}`} to="/about">Who We Are</Link>
          <Link className={`nav_item${path === '/mission'  ? ' current' : ''}`} to="/mission">Tribe Vibe</Link>
        </div>
        <div className='right'>
          <Link className={`nav_item${path === '/signin'  ? ' current' : ''}`} to="/signin">Sign In</Link>
          <Link className={`nav_item${path === '/cart'     ? ' current' : ''}`} to="/cart">Cart</Link>
        </div>
      </div>
    </nav>
  }
}

export default Navbar

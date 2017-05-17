import React, { Component } from 'react'
import { Link } from 'react-router'
import AccountIcon from 'react-icons/lib/fa/user'
import BagIcon from 'react-icons/lib/fa/shopping-bag'

class Navbar extends Component {
  render() {
    const path = this.props.location.pathname;
    const onHomepage = path === '/' ? 'on-homepage' : '';

    return <nav className={`Navbar ${onHomepage}`}>
      <Link className="nav_item title" to="/">
        <strong><h1>F<span>o</span>restTr<span>i</span>be</h1></strong>
      </Link>

      <div className='items'>
        <div className='middle'>
          {/* <Link className={`nav_item${path === '/clothing' ? ' current' : ''}`} to="/clothing">The Collection</Link> */}
          {/* <Link className={`nav_item${path === '/theinitiative'  ? ' current' : ''}`} to="/theinitiative">The Initiative</Link> */}
        </div>
        <div className='right'>
          <Link className={`nav_item${path === '/account'  ? ' current' : ''}`} to="/account"><AccountIcon /></Link>
          <Link className={`nav_item${path === '/bag'     ? ' current' : ''}`} to="/bag"><BagIcon /></Link>
        </div>
      </div>
    </nav>
  }
}

export default Navbar

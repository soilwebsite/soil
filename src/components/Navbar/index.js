import React, { Component } from 'react'
import { Link } from 'react-router'
import AccountIcon from 'react-icons/lib/fa/user'
import BagIcon from 'react-icons/lib/fa/shopping-bag'

class Navbar extends Component {
  render() {
    const path = this.props.location.pathname;

    return <nav className="Navbar">
      <Link className="nav_item title" to="/">
        <h1>
          {/* <img src={'baikhal.png'} alt="Baikhal" /> */}
          BAIKHAL
        </h1>
      </Link>
      <div className='top-right'>
        <Link className={`nav_item ${path === '/account'  ? 'current' : ''}`} to="/account"><AccountIcon /></Link>
        <Link className={`nav_item ${path === '/bag'     ? 'current' : ''}`} to="/bag"><BagIcon /></Link>
      </div>
    </nav>
  }
}

export default Navbar

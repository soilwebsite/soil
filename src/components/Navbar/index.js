import React, { Component } from 'react'
import { Nav, VirginSoil, NavLinks, NavLink, Group, TitleImg } from './ui'
import AccountIcon from 'react-icons/lib/fa/user'
import BagIcon from 'react-icons/lib/fa/shopping-bag'

class Navbar extends Component {
  render() {
    const path = this.props.location.pathname;

    return (
      <Nav>
        <NavLinks>
          <Group>
            {/* <NavLink href="/impressions">
              IMPRESSIONS
            </NavLink> */}
            <NavLink href="/about">
              ABOUT
            </NavLink>
          </Group>
          <TitleImg href="/">
            <VirginSoil
              src={'virginsoil-text-logo.png'}
              alt="Virgin Soil"
            />
            {/* <h1>Virgin Soil</h1> */}
          </TitleImg>
          <Group>
            <NavLink
              className={path === '/account' && 'current'}
              href="/account"
              >
              <AccountIcon />
            </NavLink>
              <NavLink
                className={path === '/bag' && 'current'}
                href="/bag"
                >
                <BagIcon />
            </NavLink>
          </Group>
        </NavLinks>
      </Nav>
    )
  }
}

export default Navbar

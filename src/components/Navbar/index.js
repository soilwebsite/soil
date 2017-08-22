import React, { Component } from 'react'
import { Nav, NavLinks, NavLink, Group, TitleLink } from './ui'
import AccountIcon from 'react-icons/lib/fa/user'
import BagIcon from 'react-icons/lib/fa/shopping-bag'
// import VirginSoilTextLogo from '../../../public/virgin-soil-transparent.svg'

class Navbar extends Component {
  render() {
    const path = this.props.location.pathname

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
          <TitleLink href="/">
            {/* <VirginSoil
              src={'virgin-soil-transparent.svg'}
              alt="Virgin Soil"
            /> */}
            <h1>Virgin Soil</h1>
          </TitleLink>
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

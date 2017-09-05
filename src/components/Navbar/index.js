import React, { Component } from 'react'
import { VirginSoil, Nav, NavLinks, NavLink, Group, TitleLink } from './ui'
import HeartIcon from 'react-icons/lib/fa/heart'
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
            <NavLink href="/heart">
              <HeartIcon />
            </NavLink>
            <NavLink href="/about">
              ABOUT
            </NavLink>
          </Group>
          <TitleLink href="/">
            {/* <svg>
              <use xlinkHref={'virgin-soil-text-kerned.svg'} />
            </svg> */}
            <VirginSoil
              src={'virgin-soil-text-kerned-navy.png'}
              alt="Virgin Soil"
            />
            {/* <h1>Virgin Soil</h1> */}
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

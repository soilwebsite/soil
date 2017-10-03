import React, { Component } from 'react'
import { VirginSoil, Nav, NavLinks, NavLink, Group, TitleLink } from './ui'
import { Icon } from 'react-fa'
import Logo from '../../assets/images/virgin-soil-text-kerned-navy.png'
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
              <Icon name="heart" />
            </NavLink>
            <NavLink href="/about">ABOUT</NavLink>
          </Group>
          <TitleLink href="/">
            <VirginSoil src={Logo} alt="Virgin Soil" />
          </TitleLink>
          <Group>
            <NavLink className={path === '/account' && 'current'} href="/account">
              <Icon name="user" />
            </NavLink>
            <NavLink className={path === '/bag' && 'current'} href="/bag">
              <Icon name="shopping-bag" />
            </NavLink>
          </Group>
        </NavLinks>
      </Nav>
    )
  }
}

export default Navbar

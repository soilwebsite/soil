import React, { Component } from 'react'
import { VirginSoil, Nav, NavLinks, Group, TitleLink } from './ui'
// import { Icon } from 'react-fa'
import Logo from '../../assets/images/SOIL.png'
// import VirginSoilTextLogo from '../../../public/virgin-soil-transparent.svg'

class Navbar extends Component {
  state = { opacity: 1 }
  componentDidMount() {
    this.props.scrollDiv.addEventListener('scroll', this.onScroll.bind(this))
  }
  componentWillUnmount() {
    this.props.scrollDiv.removeEventListener('scroll')
  }
  onScroll() {
    let opacity = this.props.scrollDiv.scrollTop > 10 ? 0 : 1
    if (this.state.opacity !== opacity) this.setState({ opacity })
  }
  render() {
    // const path = this.props.location.pathname
    // const lookMinimal = path === '/collection'
    return (
      <Nav showBorder={false}>
        <NavLinks>
          {/* <Group>
            <NavLink href="/impressions">
              IMPRESSIONS
            </NavLink>
            <NavLink href="/heart">
              <Icon name="heart" />
            </NavLink>
            <NavLink href="/about">ABOUT</NavLink>
            <NavLink href="/shop">SHOP</NavLink>
          </Group> */}
          <TitleLink href="/">
            <VirginSoil src={Logo} alt="Virgin Soil" opacity={this.state.opacity} />
          </TitleLink>
          <Group>
            {/* <NavLink className={path === '/account' && 'current'} href="/account">
              <Icon name="user" />
            </NavLink>
            <NavLink className={path === '/bag' && 'current'} href="/bag">
              <Icon name="shopping-bag" />
            </NavLink> */}
          </Group>
        </NavLinks>
      </Nav>
    )
  }
}

export default Navbar

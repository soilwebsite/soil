import styled from 'styled-components'
import Border from '../../assets/images/border.png'

let linkPadding = ({ theme }) => theme.px.spacing.page

export const Nav = styled.nav`
  position: relative;
  height: ${({ theme }) => theme.height.nav}px;
  margin-bottom: ${({ theme }) => theme.px.spacing.page};
  background: #fff;
  text-align: center;
  z-index: 10;
  border-bottom: 4px solid transparent;
  ${'' /* border-image: linear-gradient(180deg, #303030, #dddddd); */}
  border-image: url(${Border});
  border-image-slice: 1;
  @media screen and (max-width: 890px) {
    height: ${({ theme }) => theme.height.nav / 2}px;
  }
`

export const VirginSoil = styled.img`
  height: 50px;
  ${'' /* opacity: .5;
  filter: hue-rotate(180deg);
  filter: sepia(100%); */} ${'' /* filter: blur(.5px); */} @media screen and (max-width: 890px) {
    height: 25px;
  }
`

export const NavLinks = styled.div`
  height: ${({ theme }) => theme.height.nav}px;
  margin: 0 auto;
  max-width: ${({ theme }) => theme.width.page}px;
  display: flex;
  justify-content: space-between;
  padding-left: ${linkPadding};
  padding-right: ${linkPadding};
  @media screen and (max-width: 890px) {
    height: ${({ theme }) => theme.height.nav / 2}px;
    padding-left: 0;
    padding-right: 0;
  }
`

export const TitleLink = styled.a`
  height: 100%;
  flex: 0 0 410px;
  display: flex;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 890px) {
    flex: 0 0 205px;
  }
`

export const Group = styled.div`
  width: 100%;
  &:first-child {
    display: flex;
    justify-content: flex-start;
  }
  &:last-child {
    display: flex;
    justify-content: flex-end;
  }
`

export const NavLink = styled.a`
  height: 24px;
  font-size: 12px;
  position: relative;
  display: inline-block;
  padding: 20px ${({ theme }) => theme.spacing.navItem}px 0;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  ${'' /* color: #7f7f7f; */} color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  overflow: hidden;
  transition: 0.4s color cubic-bezier(0.19, 1, 0.22, 1);
  z-index: 14;
  &:after {
    position: absolute;
    content: '';
    left: 10px;
    right: 10px;
    bottom: -4px;
    height: 4px;
    background: #2d2d2d;
    transition: 0.6s bottom cubic-bezier(0.19, 1, 0.22, 1);
  }
  &.current:after,
  &.current:hover:after,
  &:hover:after {
    bottom: 0;
  }
  &.current,
  &.current:hover,
  &:hover {
    color: #2d2d2d;
  }
  &.current {
    cursor: default;
  }
`

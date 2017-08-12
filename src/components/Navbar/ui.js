import styled from 'styled-components'

let linkPadding = ({ theme }) =>
  `calc(${theme.spacing.page}px - ${theme.spacing.navItem}px)`

export const Nav = styled.nav`
  position: relative;
  height: ${({ theme }) => theme.spacing.navHeight}px;
  background: #fff;
  text-align: center;
  z-index: 10;
  border-bottom: 4px solid transparent;
  ${'' /* border-image: linear-gradient(180deg, #303030, #dddddd); */}
  border-image: url(./border.png);
  border-image-slice: 1;
`

export const VirginSoil = styled.img`
  height: 33px;
  ${'' /* opacity: .5;
  filter: hue-rotate(180deg);
  filter: sepia(100%); */}
`

export const NavLinks = styled.div`
  height: ${({ theme }) => theme.spacing.navHeight}px;
  display: flex;
  justify-content: space-between;
  padding-left: ${linkPadding};
  padding-right: ${linkPadding};
`

export const TitleImg = styled.a`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
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
  ${'' /* color: #7f7f7f; */}
  color: ${({ theme }) => theme.color.text};
  text-decoration: none;
  overflow: hidden;
  transition: 0.4s color cubic-bezier(.19, 1, .22, 1);
  z-index: 14;
  &:after {
    position: absolute;
    content: '';
    left: 10px;
    right: 10px;
    bottom: -4px;
    height: 4px;
    background: #2d2d2d;
    transition: 0.6s bottom cubic-bezier(.19, 1, .22, 1);
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

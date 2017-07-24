import styled from 'styled-components'

export const NavLinks = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  padding-top: 10px;
  padding-left: calc(55px - 15px); //$page-margin - $nav-item-padding;
  padding-right: calc(55px - 15px); //$page-margin - $nav-item-padding;
`
export const LinkRight = styled.div`
  margin-left: auto;
`

export const TextLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`

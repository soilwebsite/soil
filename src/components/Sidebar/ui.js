import styled from 'styled-components'

export const Sidebar = styled.nav`
  position: fixed;
  bottom: 0;
  height: 100%;
  width: ${({ theme }) => theme.px.width.sidebar};
  transition: width 1s;
  z-index: 1;
  display: flex;
  justify-content: center;
  flex-direction: column;
  @media screen and (max-width: 890px) {
    visibility: hidden;
  }
`

export const ProductType = styled.div`
  text-align: left;
  display: block;
  font-size: 12px;
  padding: 15px 30px;
  transition: opacity 1s;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  cursor: ${({ active }) => active ? 'default' : 'pointer'};
  color: ${({ active }) => active ? '#2d2d2d' : '#7f7f7f'};
  background-color: ${({ active }) => active && '#dfdfdf'};
  text-decoration: none;
  &:hover {
    color: #2d2d2d;
  }
`

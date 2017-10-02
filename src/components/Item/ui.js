import styled from 'styled-components'
import { Link } from 'react-router'
export { Info } from '../../designs'

export const Item = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  overflow: hidden;
  width: 100%;
  & + a {
    padding-top: 55px;
  }
  &:hover .info {
    opacity: 0.9;
  }
  @media screen and (max-width: 890px) {
    height: auto;
    width: 100%;
  }
`

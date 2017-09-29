import styled from 'styled-components'
import { Icon } from 'react-fa'

export const modalWidth = 830
export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`

export const Cloak = Container.extend`
  opacity: ${({ opacity }) => (opacity ? opacity : 0.4)};
  background-color: #000;
  z-index: 5;
`

export const Close = styled(Icon)`
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
  font-size: 1.5em !important;
  visibility: ${({ visibility }) => (visibility ? visibility : 'visible')};
`

export const Content = styled.div`
  width: ${modalWidth}px;
  height: 605px;
  padding: 30px;
  background: ${({ background }) => (background ? background : 'white')};
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 11;
`

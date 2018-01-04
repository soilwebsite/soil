import styled from 'styled-components'
import Image from '../../assets/images/SOIL.png'

export const Container = styled.div`
  height: calc(100vh - ${({ theme }) => theme.height.footer + theme.height.nav}px);
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  .video-container {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    z-index: -1;
    overflow: hidden;
  }
`

export const ActionBox = styled.div`
  a {
    text-transform: uppercase;
    background-color: rgba(210, 210, 210, 0.4);
    width: 320px;
    height: 300px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 2;
    border: 1px solid white;
    color: inherit;
    letter-spacing: 1.2px;
    padding: 15px;
    text-decoration: none;
    transition: color 0.4s;
    transition: background-color 0.4s;
    &:hover {
      color: black;
      background-color: white;
    }
  }
`

export const Background = styled.div`
  height: calc(100vh - ${({ theme }) => theme.height.footer + theme.height.nav}px);
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  background-image: url(${Image});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;
`

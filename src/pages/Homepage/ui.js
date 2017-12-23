import styled from 'styled-components'
import Image from '../../assets/images/SOIL.png'

export const Container = styled.div`
  margin-top: ${({ theme }) => -theme.spacing.page * 2 - 4}px;
  margin-bottom: ${({ theme }) => -theme.spacing.page * 2}px;
  height: 100%;
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
  h2 {
    font-size: 32px;
    padding: 0px;
  }
  .buttons {

    }
  }
`

export const ActionBox = styled.div`
  a {
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
  position: absolute;
  top: ${({ theme }) => theme.height.nav + 4 - 20}px;
  @media screen and (max-width: 890px) {
    top: ${({ theme }) => theme.height.nav / 2}px;
  }
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  overflow: hidden;
  background-image: url(${Image});
  background-size: contain;
`

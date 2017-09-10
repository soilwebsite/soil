import styled from 'styled-components'
import BeltImg from '../../assets/images/shop/belt.png'

export const Container = styled.div`
  margin-top: -$nav-height;
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
  p {
    font-size: 12px;
  }
  .buttons {
    width: 600px;
    height: 100px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    z-index: 2;
    a {
      width: 120px;
      color: inherit;
      letter-spacing: 1.2px;
      font-size: 12px;
      padding: 15px;
      border: 1px solid white;
      text-decoration: none;
      transition: color .4s;
      transition: background-color .4s;
      &:hover {
        color: black;
        background-color: white;
      }
    }
  }
`

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  overflow: hidden;
  ${'' /* background-image: url(https://scontent-lga3-1.cdninstagram.com/t51.2885-15/e35/19761740_384896158575105_5699318299238596608_n.jpg); */}
  ${'' /* background-image: url(https://scontent-iad3-1.cdninstagram.com/t51.2885-15/e35/19623470_1868955620025064_19260140888784896_n.jpg); */}
  background-image: url(${BeltImg});
  background-size: cover;
`

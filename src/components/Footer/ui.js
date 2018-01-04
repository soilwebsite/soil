import styled from 'styled-components'
import BlueTexture from '../../assets/images/virginsoil-texture-spray-dark-crop.png'
// import Border from '../../assets/images/border.png'

export const Container = styled.div`
  height: ${({ theme }) => theme.height.footer}px;
  position: relative;
  overflow: hidden;
  background: #fff;
  z-index: 10;
  ${'' /* border-top: ${({ showBorder }) => showBorder && '4px solid transparent'};
  border-image: url(${Border});
  border-image-slice: 1; */};
`

export const Links = styled.div`
  text-transform: uppercase;
  position: absolute;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  div {
    position: absolute;
    bottom: 0;
    background: #fff;
    width: 100%;
    padding: 5px;
  }
  h3 {
    a {
      padding: 5px;
    }
    display: inline-block;
    margin: 0 15px;
  }
`

export const Texture = styled.div`
  height: 100%;
  z-index: -1;
  div {
    width: 100%;
    height: 100%;
    background: url(${BlueTexture});
    background-position: 0 0;
    background-repeat: repeat-x;
    background-size: contain;
    + div {
      transform: scaleX(-1);
    }
  }
  @media screen and (max-width: 890px) {
    height: 80px;
  }
`

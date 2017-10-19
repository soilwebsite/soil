import styled from 'styled-components'
import BlueTexture from '../../assets/images/virginsoil-texture-spray-dark-crop.png'
import Border from '../../assets/images/border.png'

export const Container = styled.div`
  position: relative;
  background: #fff;
  margin-top: ${({ theme }) => theme.px.spacing.page /* makes Hero proper size */};
  padding-top: ${({ theme }) => theme.px.spacing.page};
  text-transform: uppercase;
  border-top: ${({ showBorder }) => showBorder && '4px solid transparent'};
  border-image: url(${Border});
  border-image-slice: 1;
  z-index: 10;
`

export const Links = styled.div`
  h3 {
    a {
      padding: 5px;
    }
    display: inline-block;
    margin: 15px;
  }
`

export const SubscriptionBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  height: 60px;
`

export const EmailCapture = styled.div`
  display: flex;
  input[type='email'] {
    border-width: 0;
    width: 18vw;
    padding: 5px;
    display: inline-block;
    border-bottom: 1px solid #ddd;
    font-family: inherit;
    font-size: inherit;
    &::placeholder {
      opacity: 0.5;
    }
  }
  input:focus {
    outline: none;
    border-bottom: 1px solid #bbb;
  }
`

export const Texture = styled.div`
  height: 200px;
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

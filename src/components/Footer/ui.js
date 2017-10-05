import styled from 'styled-components'
import BlueTexture from '../../assets/images/virginsoil-texture-spray-dark.png'
import Border from '../../assets/images/border.png'

let height = 380
export const Container = styled.div`
  position: relative;
  background: #fff;
  height: ${height}px;
  margin-top: ${({ theme }) => theme.px.spacing.page};
  padding: ${({ theme }) => theme.px.spacing.page};
  text-transform: uppercase;
  border-top: 4px solid transparent;
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
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 30px;
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

export const Texture = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 345px;
  opacity: 1;
  display: flex;
  z-index: -1;
  div {
    ${'' /* background: linear-gradient(
        to bottom,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.9) 15%,
        rgba(255, 255, 255, 0) 100%
      ),
      url(${BlueTexture}) no-repeat;
*/} width: 100%;
    height: 100%;
    background: url(${BlueTexture}) no-repeat;
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    + div {
      transform: scaleX(-1);
    }
  }
`

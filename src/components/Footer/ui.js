import styled from 'styled-components'
import BlueTexture from '../../assets/images/virginsoil-texture-spray-ii-crop.jpg'
import Border from '../../assets/images/border.png'

let height = 600
export const Container = styled.div`
  position: relative;
  background: #fff;
  height: ${height}px;
  margin-top: ${({ theme }) => theme.spacing.page};
  padding: ${({ theme }) => theme.spacing.page};
  display: flex;
  align-items: flex-start;
  text-transform: uppercase;
  border-top: 4px solid transparent;
  border-image: url(${Border});
  border-image-slice: 1;
  > div {
    width: 33%;
    text-align: left;
    padding: 15px;
    h3 {
      padding-bottom: 30px;
    }
    p {
      padding: 10px 0;
      a {
        cursor: pointer;
      }
    }
  }
`
export const Column = styled.div`
  z-index: 1;
`

export const Texture = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: ${height}px;
  opacity: 1;
  display: flex;
  z-index: 0;
  div {
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, .9) 15%, rgba(255, 255, 255, 0) 100%), url(${BlueTexture}) no-repeat;
    background-size: cover;
    background-repeat: no-repeat;
    + div {
      transform: scaleX(-1);
    }
  }
`

export const EmailCapture = styled.div`
  color: #333;
  display: flex;
  input[type=email] {
    border-width: 0;
    width: 18vw;
    padding: 5px;
    display: inline-block;
    border-bottom: 2px solid #ddd;
  }
  input:focus {
    outline: none;
  }
`

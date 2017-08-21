import styled from 'styled-components'

let height = 200
export const Container = styled.div`
  position: relative;
  background: #fff;
  height: ${height}px;
  padding: 30px;
  display: flex;
  align-items: flex-start;
  text-transform: uppercase;
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

export const Texture = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 40px;
  background: url(virginsoil-texture.png) 0 48px;
  ${'' /* background-size: cover; */}
  background-size: 700px;
  background-repeat: repeat;
  opacity: 1;
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

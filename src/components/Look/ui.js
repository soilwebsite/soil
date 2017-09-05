import styled from 'styled-components'

export const LookWrap = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 500px;
  width: 350px;
  margin-top: 55px;
  margin-left: 55px;
  &:nth-child(3n + 1) {
    margin-left: 0;
  }
  &:hover .info {
    opacity: .9;
  }
`
export const Look = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;

  img {
    ${'' /* max-width: 100%; */}
    ${'' /* perspective: 1000; */}
    ${'' /* transition: 0.5s; */}
    height: 100%;
  }
  @media screen and (max-width: 890px) {
    height: auto;
    width: 100%;
    img {
      height: auto;
    }
  }
`

export const Info = styled.div`
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 40%;
  left: 0;
  background: #fff;
  opacity: 0;
  transition: opacity .5s;
  text-transform: none;
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  h3 {
    margin-right: 5px;
  }
`

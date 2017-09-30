import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  * {
    text-align: left;
    letter-spacing: normal;
  }
`
export const Previews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  width: 75px;
  padding: 5px;
`
export const Preview = styled.img`
  width: auto;
  padding: 5px;
  cursor: pointer;
  width: 100%;
`
export const Image = styled.img`width: 35%;`
export const Info = styled.div`
  width: 40%;
  padding: 1.5%;
`
export const Title = styled.h2``
export const Description = styled.div`
  p:nth-of-type(1) {
    color: red;
  }
  p:nth-of-type(2) {
    color: green;
  }
  p:nth-of-type(3) {
    color: blue;
  }
  p:nth-of-type(4) {
    color: orange;
  }
`

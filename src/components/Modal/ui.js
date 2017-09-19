import styled from 'styled-components'
import { Icon } from 'react-fa'

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 10;
`

export const Close = styled(Icon)`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
`

export const Content = styled.div`
  border: 1px solid lightgray;
  width: 800px;
  height: 600px;
  padding: 10px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`

export const Images = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid lightgray;
`

export const MiniImage = styled.div`
  cursor: pointer;
  border: 1px solid ${({ active }) => active ? 'darkgray' : 'lightgray'};
  margin: 10px;
  width: 50px;
  height: 50px;
  background-image: url(${({ url }) => url});
  background-size: contain;
`

export const Image = styled.img`
  max-height: 500px;
  max-width: 300px;
`

export const Details = styled.div`
  border: 1px solid lightgray;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  max-height: 500px;
  width: 300px;
  span {
    padding: 10px;
  }
`

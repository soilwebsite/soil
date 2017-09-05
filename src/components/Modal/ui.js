import styled from 'styled-components'

export const Modal = styled.div`
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

export const Content = styled.div`
  width: 800px;
  height: 800px;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Image = styled.img`
  max-height: 500px;
  max-width: 300px;
`

export const Details = styled.div`
  max-height: 500px;
  width: 300px;
`

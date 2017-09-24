import React from 'react'
import styled from 'styled-components'

export const Container = styled.div`
  margin-top: -${({ theme }) => theme.height.nav}px;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  text-transform: uppercase;
  span {
    border: 1px dashed black;
    padding: 30px;
  }
`

export const ComingSoon = () => {

  return (
    <Container>
      <span>Coming Soon</span>
    </Container>
  )
}

export default ComingSoon

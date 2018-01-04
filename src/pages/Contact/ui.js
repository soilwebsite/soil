import styled from 'styled-components'

export const Container = styled.div`
  height: calc(100vh - ${({ theme }) => theme.height.footer + theme.height.nav}px);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const Text = styled.p`
  text-align: center;
  letter-spacing: normal;
`

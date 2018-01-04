import styled from 'styled-components'

export const Container = styled.div`
  // margin-bottom: ${({ theme }) => theme.height.footer}px;
  height: 100vh;
  // height: calc(100vh - ${({ theme }) => theme.height.nav}px);
  position: fixed;
  overflow-y: scroll;
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  font-family: 'Raleway', sans-serif;
`

export const Content = styled.div`
  margin-top: ${({ theme }) => theme.height.nav}px;
  min-height: calc(100vh - ${({ theme }) => theme.height.nav + theme.height.footer}px);
`

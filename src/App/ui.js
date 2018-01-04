import styled from 'styled-components'

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.height.nav}px;
  // margin-bottom: ${({ theme }) => theme.height.footer}px;
  height: calc(100vh - ${({ theme }) => theme.height.nav}px);
  position: fixed;
  overflow-y: scroll;
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  font-family: 'Raleway', sans-serif;
`

export const Content = styled.div`
  min-height: calc(100vh - ${({ theme }) => theme.height.footer + theme.height.nav}px);
`

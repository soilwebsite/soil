import styled from 'styled-components'

export const Container = styled.div`
  margin-top: ${({ theme }) => theme.height.nav}px;
  margin-bottom: ${({ theme }) => theme.spacing.footer}px;
  position: fixed;
  overflow-y: scroll;
  height: calc(100% - ${({ theme }) => theme.spacing.footer + theme.height.nav}px);
  width: 100%;
  color: ${({ theme }) => theme.color.text};
  font-family: 'Raleway', sans-serif;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
    letter-spacing: 0.4em;
    text-transform: uppercase;
  }
  h2 {
    font-size: 2em;
    display: inline-block;
    padding: 0.2em;
    margin-bottom: 25px;
  }
`

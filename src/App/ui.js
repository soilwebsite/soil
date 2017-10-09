import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.color.text};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: 'franklingothic-demi', sans-serif;
  }
  h2 {
    font-size: 2em;
    display: inline-block;
    padding: 0.2em;
    margin-bottom: 25px;
  }
`

import styled from 'styled-components'

export const Article = styled.article`
  margin: 20px;
  width: 730px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 50px auto 100px;
  & img {
    max-width: 730px;
    height: auto;
  }
  & p {
    text-align: left;
    line-height: 24px;
  }
`

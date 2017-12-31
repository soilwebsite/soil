import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Frame = styled.div`
  flex-basis: content;
  margin-right: ${({ theme }) => theme.px.spacing.page};
`

export const Photo = styled.img`
  filter: grayscale();
  width: 350px;
`

export const Text = styled.p`
  width: 400px;
  letter-spacing: normal;
  text-align: justify;
  text-justify: newspaper;
  margin-bottom: 1.8em;
`

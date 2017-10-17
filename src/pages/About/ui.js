import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.px.spacing.page};
  width: ${({ theme }) => theme.width.page / 2}px;
  margin: 0 auto;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
`
export const Frame = styled.div`
  flex-basis: content;
  margin-right: 20px;
`
export const Photo = styled.img``

export const Title = styled.h2``

export const Text = styled.p`
  width: 400px;
  letter-spacing: normal;
  text-align: justify;
  text-justify: newspaper;
  margin-bottom: 1.8em;
`

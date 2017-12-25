import styled from 'styled-components'

export const Container = styled.div`
  height: 100%;
  width: ${({ theme }) => theme.width.page / 2}px;
  padding: 0 ${({ theme }) => theme.px.spacing.page};
  margin: 0 auto;
`
export const Content = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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

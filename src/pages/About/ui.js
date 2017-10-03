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
  width: 189px;
  margin-right: ${({ theme }) => theme.px.spacing.page};
`
export const Photo = styled.img``

export const Title = styled.h2``

export const Text = styled.p`
  width: 400px;
  text-align: left;
  letter-spacing: normal;
`

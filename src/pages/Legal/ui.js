import styled from 'styled-components'

export const Container = styled.div`
  width: ${({ theme }) => theme.width.page / 2}px;
  margin: 0 auto;
`
export const Content = styled.div`
  display: flex;
  justify-content: center;
`

export const Title = styled.h2``

export const TextBtn = styled.span`
  opacity: ${({ selected }) => (selected ? 1 : 0.5)};
  text-decoration: ${({ selected }) => (selected ? 'underline' : 'none')};
  margin-bottom: 10px;
  padding: 5px;
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
`

export const Text = styled.p`width: 600px;`

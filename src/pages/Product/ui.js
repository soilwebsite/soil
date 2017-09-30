import styled from 'styled-components'

export const Container = styled.div`
  padding: 0 ${({ theme }) => theme.px.spacing.page};
  width: ${({ theme }) => theme.width.page}px;
  margin: 0 auto;
`

import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.px.spacing.page};
  max-width: ${({ theme }) => theme.width.page}px;
`

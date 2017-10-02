import styled from 'styled-components'

export const Container = styled.div`
  position: relative;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.px.spacing.page};
  max-width: ${({ theme }) => theme.width.page}px;
  @media screen and (max-width: 890px) {
    padding: 0;
  }
`
export const Hero = styled.div`
  padding-bottom: ${({ theme }) => theme.px.spacing.page};
  p {
    letter-spacing: normal;
    font-size: 14px;
    padding: 0 360px;
  }
`

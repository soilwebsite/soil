import styled from 'styled-components'
import HeroImage from '../../assets/images/brooklyn-bridge-in-new-york.jpg'

export const Container = styled.div`
  position: relative;
  margin: ${({ theme }) => -theme.spacing.page}px auto ${({ theme }) => theme.spacing.page}px;
  padding: 0 ${({ theme }) => theme.px.spacing.page};
  max-width: ${({ theme }) => theme.width.page}px;
  @media screen and (max-width: 890px) {
    padding: 0;
  }
`
export const Hero = styled.div`
  height: 300px;
  background-image: url(${HeroImage});
  background-size: cover;
  margin-top: -55px;
  display: flex;
  justify-content: center;
  align-items: center;
  p {
    color: #fff;
    letter-spacing: normal;
    padding: 0 10%;
  }
`
export const Panel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 24px;
  border-top: 2px solid silver;
  margin-top: ${({ theme }) => theme.px.spacing.page};
  padding: 10%;
`

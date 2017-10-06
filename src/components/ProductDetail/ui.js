import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  * {
    text-align: left;
    letter-spacing: normal;
  }
`
export const Previews = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  margin: 5px;
`
export const Preview = styled.div`
  width: 75px;
  height: 100px;
  cursor: pointer;
  overflow: hidden;
  margin-bottom: 1em;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ active }) => active && '0.5'};
  ${'' /* filter: ${({ active }) => active && 'sepia()'}; */};
`
export const MiniImg = styled.img`width: 100%;`
export const Image = styled.img`
  max-width: 35%;
  max-height: 600px;
`
export const Info = styled.div`
  width: 40%;
  padding: 1.5%;
`
export const Title = styled.h2`
  display: block;
  font-size: 18px;
  font-weight: normal;
  margin-bottom: 1em;
`
export const Text = styled.span`
  display: block;
  margin-bottom: 1em;
`
export const Button = styled.div`
  background-color: ${({ theme }) => theme.color.primary};
  color: white;
  border-radius: 2px;
  padding: 15px 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${'' /* cursor: pointer; */} cursor: default;
  margin-bottom: 2em;
  text-transform: uppercase;
  font-weight: bold;
`
export const Description = styled.div`
  p {
    padding-bottom: 1em;
  }
  p:nth-of-type(1) {
    ${'' /* Editor's Note */};
  }
  p:nth-of-type(2) {
    ${'' /* Details */};
  }
  p:nth-of-type(3) {
    ${'' /* Care instructions */};
  }
  p:nth-of-type(4) {
    ${'' /* Size and Fit */};
  }
`

export const Options = styled.div``
export const OptionSection = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 1em;
`
export const Option = styled.div`
  cursor: pointer;
  padding: 8px 32px;
  display: inline-block;
  color: ${({ theme }) => theme.color.primary};
  border: 1px solid ${({ theme }) => theme.color.primary};
  &:hover {
    opacity: 0.7;
  }
  margin: 0 auto;
  &:first-child {
    margin-left: 0;
  }
  &:last-child {
    margin-right: 0;
  }
`

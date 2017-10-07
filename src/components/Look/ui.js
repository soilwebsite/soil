import styled from 'styled-components'
export { Info } from '../../designs'

// strict dimensions crop photos
export const Container = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 370px;
  height: 570px;
  overflow: hidden;
  cursor: ${({ dummy }) => !dummy && 'pointer'};
  margin: ${({ i, theme: { spacing: { page } } }) => {
    let left = i % 3 === 2 ? page : 0
    let right = i % 3 === 0 ? page : 0
    return `${page}px ${right}px ${page}px ${left}px`
  }};
  &:hover .info {
    opacity: 0.9;
  }
  @media screen and (max-width: 890px) {
    margin: 0;
    width: 100vw;
    height: auto;
  }
`
export const Look = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  height: 100%;
  img {
    height: 100%;
    width: auto;
    @media screen and (max-width: 890px) {
      width: 100%;
      height: auto;
    }
  }
`

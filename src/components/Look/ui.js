import styled from 'styled-components'
export { Info } from '../../designs'

export const Container = styled.div`
  display: inline-block;
  overflow: hidden;
  width: 350px;
  cursor: ${({ dummy }) => !dummy && 'pointer'};
  margin: ${({ theme: { spacing: { page } } }) =>
    `${page / 2}px ${page / 2}px ${page / 2}px ${page / 2}px`};
  &:hover .info {
    opacity: 0.9;
  }
`
export const Look = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`

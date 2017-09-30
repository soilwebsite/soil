import styled from 'styled-components'

export const LookWrap = styled.div`
  display: inline-block;
  overflow: hidden;
  height: 500px;
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
  height: 100%;
  img {
    ${'' /* max-width: 100%; */} ${'' /* perspective: 1000; */} ${'' /* transition: 0.5s; */} height: 100%;
  }
  @media screen and (max-width: 890px) {
    width: 100%;
  }
`

export const Info = styled.div`
  width: 100%;
  height: 7%;
  position: absolute;
  bottom: 40%;
  left: 0;
  background: #fff;
  opacity: 0;
  transition: opacity 0.5s;
  text-transform: none;
  display: flex;
  font-size: 12px;
  justify-content: center;
  align-items: center;
  h3 {
    margin-right: 5px;
  }
`

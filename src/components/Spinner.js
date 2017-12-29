import styled from 'styled-components'

export default styled.div`
  &,
  &::before,
  &::after {
    position: absolute;
    top: 50%;
    left: 50%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-left-color: rgba(0, 0, 0, 0.4);
    border-radius: 999px;
  }
  margin: -25px 0 0 -25px;
  margin-top: -80px;
  height: 50px;
  width: 50px;
  animation: animation-rotate 1000ms linear infinite;
  &::before {
    content: '';
    margin: -23px 0 0 -23px;
    height: 44px;
    width: 44px;
    animation: animation-rotate 1000ms linear infinite;
  }
  &::after {
    content: '';
    margin: -29px 0 0 -29px;
    height: 56px;
    width: 56px;
    animation: animation-rotate 2000ms linear infinite;
  }
  @keyframes animation-rotate {
    100% {
      transform: rotate(360deg);
    }
  }
`

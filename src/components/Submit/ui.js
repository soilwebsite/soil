import styled from 'styled-components'

export const SubmitUI = styled.div`
  display: inline-block;
  .ok {
    // border-radius: 100%;
    width: 60px;
    color: black;
    // background: white;
    // width: 30px;
    border: 1px solid #ddd;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
  &:focus, &:active {
    background: #ddd;
  }
`

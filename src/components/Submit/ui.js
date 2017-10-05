import styled from 'styled-components'

export const SubmitUI = styled.div`
  display: inline-block;
  margin-left: 10px;
  user-select: none;
  div {
    padding: 0 20px;
    color: black;
    border: 1px solid #ddd;
    height: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      border: 1px solid #bbb;
    }
  }
  &:focus,
  &:active {
    background: #ddd;
  }
`

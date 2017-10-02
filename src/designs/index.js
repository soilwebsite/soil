import styled from 'styled-components'

export const Button = styled.div`
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
  }
  &:focus,
  &:active {
    background: #ddd;
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

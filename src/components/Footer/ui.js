import styled from 'styled-components'

export const EmailCapture = styled.div`
  color: #333;
  display: flex;
  input[type=email] {
    border-width: 0;
    width: 18vw;
    padding: 5px;
    display: inline-block;
    border-bottom: 2px solid #ddd;
  }
  input:focus {
    outline: none;
  }
`

import React from 'react'
import styled from 'styled-components'
import Submit from '../Submit'

const SubscriptionBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  margin-top: 15px;
  height: 60px;
`

const EmailCapture = styled.div`
  display: flex;
  input[type='email'] {
    border-width: 0;
    width: 18vw;
    padding: 5px;
    display: inline-block;
    border-bottom: 1px solid #ddd;
    font-family: inherit;
    font-size: inherit;
    &::placeholder {
      opacity: 0.5;
    }
  }
  input:focus {
    outline: none;
    border-bottom: 1px solid #bbb;
  }
`

export default () => {
  return (
    <SubscriptionBox>
      <div>{this.state.message}</div>
      <EmailCapture>
        <input
          type="email"
          value={this.state.value}
          onChange={this.handleChange}
          placeholder="Stay in touch"
        />
        <Submit handleSubmit={this.subscribeEmail} />
      </EmailCapture>
    </SubscriptionBox>
  )
}

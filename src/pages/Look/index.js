import React, { Component } from 'react'
import LookGrid from '../../components/LookGrid'
import { Container, Hero } from './ui'

export default class Look extends Component {
  render() {
    return (
      <Container>
        <Hero />
        <LookGrid />
      </Container>
    )
  }
}

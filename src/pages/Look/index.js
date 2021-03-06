import React, { Component } from 'react'
import Spinner from '../../components/Spinner'
import Carousel from '../../components/Carousel'
// import LookGrid from '../../components/LookGrid'
// import Slideshow from '../../components/Slideshow'
import { Container } from './ui'

export default class Look extends Component {
  render() {
    let { collections } = this.props
    if (!collections) return <Spinner />

    return (
      <Container>
        {/* <Hero>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry's standard dummy text ever since the 1500s, when an unknown
            printer took a galley of type and scrambled it to make a type specimen book. It has
            survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
            publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </Hero> */}
        {/* <Slideshow items={this.props.products.looks} /> */}
        {/* <LookGrid items={this.props.products.looks} /> */}
        <Carousel items={collections.preFall2018.products} />
        {/* <Panel>
          <a href="/about">>> Shop The Collection >></a>
        </Panel> */}
      </Container>
    )
  }
}

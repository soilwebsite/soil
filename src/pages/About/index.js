import React, { Component } from 'react'
import { Container, Content, Photo, Text } from './ui'
import AboutPhoto from '../../assets/images/aboutme.jpg'

class About extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Photo src={AboutPhoto} alt="About Me: Maneesha" />
          <Text>
            VIRGIN SOIL is the creative child of Maneesha Wijesinghe, and started in 2017 as an effort to find an artistic outlet in fashion.
            The name was inspired by one of her favorite books: The 1935 Mikhail Sholokhov novel <strong>"Virgin Soil Upturned".</strong>
            <br /><br />
            VIRGIN SOIL explores a world of visual positivity.
            The designs aesthetic is modern minimalism with subtle touches of Indian couture.
            <br /><br />
            The VIRGIN SOIL wearer is visually appealing, powerful, and enigmatic.
            They are not driven by trend but with a desire for difference, prominence, and allure.
            They are educated, intelligent, amiable, and yet carry a formidable mystery that cannot be deciphered.
            Others can feel the effects of VIRGIN SOIL wearers simply by passing them on the street.
            <br /><br />
            VIRGIN SOIL is designed and manufactured within the US using imported premium-quality fabrics.
          </Text>
        </Content>
      </Container>
    )
  }
}

export default About

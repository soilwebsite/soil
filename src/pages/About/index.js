import React, { Component } from 'react'
import { Container, Content, Title, Photo, Text } from './ui'
import AboutPhoto from '../../assets/images/aboutme.jpg'

class About extends Component {
  render() {
    return (
      <Container>
        <Title>About</Title>
        <Content>
          <Photo src={AboutPhoto} alt="About Me: Maneesha" />
          <Text>
            IN SOIL is the creative child of Maneesha Wijesinghe started in 2017 as an effort to find an artistic outlet in fashion. The name was inspired by one of her favorites books, 1935 Mikhail Sholokhov novel VIRGIN SOIL UPTURNED.

  VIRGIN SOIL explores a world of visual positivity. The designs aesthetic is modern minimalism with subtle touches of Indian couture. VIRGIN SOIL wearer is visually appealing, powerful, and enigmatic. She is not driven by trend but with a desire for difference, prominence, and allure. She is educated, intelligent, and amiable yet carries a formidable mystery that you cannot decipher. You will feel the benefit of it even If you happen to just pass her on the street.

  VIRGIN SOIL designed and manufactured in USA with imported premium quality fabrics.

          </Text>
        </Content>
      </Container>
    )
  }
}

export default About

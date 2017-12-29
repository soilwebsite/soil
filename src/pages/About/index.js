import React, { Component } from 'react'
import { Container, Text, Frame, Photo } from './ui'
import AboutPhoto from '../../assets/images/maneesha-grey-slanted.png'

export default class About extends Component {
  render() {
    return (
      <Container>
        <Frame>
          <Photo src={AboutPhoto} alt="About Me: Maneesha" />
        </Frame>
        <div>
          <Text>
            SOIL was conceived in 2017 by Maneesha Wijesinghe as an outlet for creative expression.
            <br />
            The project explores the concept of "visual positivity" that aims to evoke positive
            emotions in the viewer of the designs.
          </Text>
          <Text>Currently, designs are created and manufactured in New York City.</Text>
        </div>
      </Container>
    )
  }
}

// VIRGIN SOIL is the creative child of Maneesha Wijesinghe, started in 2017 as an effort
// to find an outlet for applied arts. The name was inspired by one of her favorite
// books: The 1935 Mikhail Sholokhov novel "Virgin Soil Upturned".
// VIRGIN SOIL explores a world of visual positivity where it aims to evoke positive
// emotions in the viewer of the designs. The design aesthetic is modern minimalism with
// subtle touches of Indian couture.
// VIRGIN SOIL is designed and manufactured in New York City using premium-quality
// fabrics imported from Europe and Asia.

// The VIRGIN SOIL wearer is visually appealing, powerful, and enigmatic. They are not
// driven by trend but with a desire for difference, prominence, and allure. They are
// educated, intelligent, amiable, and yet carry a formidable mystery that cannot be
// deciphered. Others can feel the effects of VIRGIN SOIL wearers simply by passing them on
// the street.

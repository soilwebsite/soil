import React from 'react'
import { Container, Title, Window, Reel, Item, Image } from './ui'

export default class Carousel extends React.Component {
  state = { activeIdx: 1 }

  setActiveIdx(activeIdx) {
    this.setState({ activeIdx })
  }

  render() {
    let { activeIdx } = this.state
    return (
      <Container>
        <Title>Pre-fall 2018</Title>
        <Window>
          <Reel activeIdx={activeIdx}>
            {this.props.items.map((item, i) => (
              <Item key={i} isActive={i === activeIdx} onClick={() => this.setActiveIdx(i)}>
                <Image
                  i={i}
                  isActive={i === activeIdx}
                  activeIdx={activeIdx}
                  src={item.images[0].src}
                />
              </Item>
            ))}
          </Reel>
        </Window>
      </Container>
    )
  }
}

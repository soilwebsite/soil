import React from 'react'
import { Container, Title, Window, Reel, Item, Image } from './ui'

export default class Carousel extends React.Component {
  state = { activeIdx: 1 }

  componentWillMount() {
    this.setState({ activeIdx: this.props.items.length })
  }

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
            {this.props.items.concat(this.props.items).map((item, idx) => (
              <Item
                key={item.id + idx}
                isActive={idx === activeIdx}
                onClick={() => this.setActiveIdx(idx)}
              >
                <Image
                  i={idx}
                  isActive={idx === activeIdx}
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

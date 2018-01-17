import React from 'react'
import { Container, Title, Window, Reel, Item, Image, speed } from './ui'

export default class Carousel extends React.Component {
  state = { activeIdx: 1 }

  componentWillMount() {
    this.setState({ activeIdx: this.props.items.length, inTransition: false })
  }

  setActiveIdx(activeIdx) {
    if (this.state.inTransition) return
    this.setState({ activeIdx, inTransition: true })
    let oldIdx = this.state.activeIdx
    let { items } = this.props
    setTimeout(() => {
      if (activeIdx > oldIdx) {
        let firstItem = items.shift()
        this.setState({
          items: items.push(firstItem),
          activeIdx: items.length,
          inTransition: false
        })
      }
      if (activeIdx < oldIdx) {
        let lastItem = items.pop()
        this.setState({
          items: items.unshift(lastItem),
          activeIdx: items.length,
          inTransition: false
        })
      }
    }, speed * 1000)
  }

  render() {
    let { items } = this.props
    let { activeIdx, inTransition } = this.state
    // let activeIdx = Math.floor(items.length / 2)
    return (
      <Container>
        <Title>Pre-fall 2018</Title>
        <Window>
          <Reel activeIdx={activeIdx} inTransition={inTransition}>
            {items.concat(items).map((item, idx) => (
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
                  inTransition={inTransition}
                />
              </Item>
            ))}
          </Reel>
        </Window>
      </Container>
    )
  }
}

import React from 'react'
import styled from 'styled-components'

const speed = 0.6
const width = 33

const Container = styled.div`
  height: 100%;
`

const Title = styled.h2`
  font-weight: normal;
  font-size: 16px;
  letter-spacing: normal;
`

const Window = styled.div`
  height: 80%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Reel = styled.ul`
  height: 100%;
  margin: 0;
  padding: 0;
  white-space: nowrap;
  transition: transform ${speed}s;
  transform: translateX(-${p => p.activeIdx * width - width}%);
`

const Item = styled.li`
  height: 100%;
  width: ${width}%;
  white-space: normal; /* reset */
  display: inline-flex;
  justify-content: center;
  align-items: center;
`

const Image = styled.img`
  object-fit: scale-down;
  object-position: ${p => (p.isActive ? 'center' : p.activeIdx < p.i ? 'left' : 'right')} center;
  height: 100%;
  width: 100%;
  transition: all ${speed}s;
  transform: scale(${({ isActive }) => (isActive ? 1 : 0.8)});
  opacity: ${({ isActive }) => (isActive ? 1 : 0.5)};
`

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

import React from 'react'
import styled from 'styled-components'

const speed = 0.6
const width = 33

const Window = styled.div`
  height: 100%;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Reel = styled.ul`
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
  align-items: flex-start;
`

const Image = styled.img`
  height: auto;
  width: 100%;
  transition: all ${speed}s;
  transform: scale(${({ isActive }) => (isActive ? 1 : 0.9)});
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
      <Window>
        <Reel activeIdx={activeIdx}>
          {this.props.items.map((item, i) => (
            <Item key={i} isActive={i === activeIdx} onClick={() => this.setActiveIdx(i)}>
              <Image isActive={i === activeIdx} src={item.images[0].src} />
            </Item>
          ))}
        </Reel>
      </Window>
    )
  }
}

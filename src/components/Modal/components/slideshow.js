import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-fa'
import { modalWidth } from '../ui'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  height: 90vh;
  width: 100%;
  .arrow {
    color: white;
  }
`

const Pane = styled.div`
  height: 100%;
  width: ${modalWidth}px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
`

const Image = styled.img`height: 100%;`

const Arrow = styled(Icon)`
  padding: 10px;
  cursor: pointer;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: props.selected }
    this.setActive = this.setActive.bind(this)
    this.handlePress = this.handlePress.bind(this)
  }
  componentWillMount() {
    document.addEventListener('keydown', this.handlePress)
  }
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handlePress)
  }
  setActive(i) {
    this.setState({ active: i })
  }
  rotate(increment) {
    let maxIdx = this.props.items.length - 1
    let newActive = this.state.active + increment
    if (maxIdx - 1 < newActive) newActive = 0
    if (newActive < 0) newActive = maxIdx
    this.setState({ active: newActive })
  }
  handlePress({ key }) {
    if (key === 'ArrowRight') this.rotate(1)
    if (key === 'ArrowLeft') this.rotate(-1)
  }

  render() {
    let { items } = this.props
    let { active } = this.state
    return (
      <Container onKeyDown={this.handlePress}>
        <Arrow className="arrow" name="angle-left" size="4x" onClick={this.rotate.bind(this, -1)} />
        <Pane>
          <Image src={items[active].images[0].url} />
        </Pane>
        <Arrow className="arrow" name="angle-right" size="4x" onClick={this.rotate.bind(this, 1)} />
      </Container>
    )
  }
}

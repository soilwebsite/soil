import React from 'react'
import styled from 'styled-components'
import { Icon } from 'react-fa'
import Modal from '../Modal'
import ModalContent from '../Modal/components/shop'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  position: relative;
  height: calc(100vh - ${({ theme }) => theme.height.nav * 2}px);
  width: 100%;
  .arrow {
    color: ${({ theme }) => theme.color.primary};
  }
`

const Pane = styled.div`
  height: 100%;
  width: 830px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: inline-block;
`

const Image = styled.img`
  height: 100%;
  width: auto;
`

const Arrow = styled(Icon)`
  padding: 10px;
  cursor: pointer;
  align-self: center;
`

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: 0 }
    this.setActive = this.setActive.bind(this)
    this.handlePress = this.handlePress.bind(this)
    this.openModal = this.openModal.bind(this)
    this.hideModal = this.hideModal.bind(this)
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
  openModal() {
    this.setState({ showModal: true })
  }
  hideModal() {
    this.setState({ showModal: false })
  }

  render() {
    let { items } = this.props
    let { active, showModal } = this.state
    console.log(items[active])
    return (
      <Container onKeyDown={this.handlePress}>
        <Arrow className="arrow" name="angle-left" size="4x" onClick={this.rotate.bind(this, -1)} />
        <Pane>
          <Image
            onClick={this.openModal}
            src={items[active].images[0].src.replace('.jpg', '_grande.jpg')}
          />
        </Pane>
        <Arrow className="arrow" name="angle-right" size="4x" onClick={this.rotate.bind(this, 1)} />
        {showModal && (
          <Modal hideModal={this.hideModal} custom={{}}>
            <ModalContent item={items[active]} />
          </Modal>
        )}
      </Container>
    )
  }
}

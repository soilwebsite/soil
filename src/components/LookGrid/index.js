import React from 'react'
import Look from '../Look'
import { Container } from './ui'
import Modal from '../Modal'
import LookModal from '../Modal/components/slideshow'
import looks from '../../assets/images/ss18'

export default class LookGrid extends React.Component {
  constructor(props) {
    super(props)
    this.state = { modalIdx: null }
    this.onClick = this.onClick.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  onClick(i) {
    this.setState({ modalIdx: i })
  }

  hideModal() {
    this.setState({ modalIdx: null })
  }

  render() {
    const { modalIdx } = this.state
    let custom = {
      cloak: { opacity: 0.87 },
      content: { background: 'transparent' },
      close: { visibility: 'hidden' }
    }
    return (
      <Container>
        {looks.map((look, i) => <Look key={i} item={look} onClick={() => this.onClick(i)} />)}
        {(modalIdx || modalIdx === 0) && (
          <Modal hideModal={this.hideModal} custom={custom}>
            <LookModal items={looks} selected={modalIdx} />
          </Modal>
        )}
      </Container>
    )
  }
}

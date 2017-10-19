import React from 'react'
import Look from '../Look'
import { Container } from './ui'
// import { times } from 'lodash'
import Modal from '../Modal'
import LookModal from '../Modal/components/look'

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
      // cloak: { opacity: 0.87 },
      // content: { background: 'transparent' },
      // close: { visibility: 'hidden' }
    }
    // let whiteBlocks = looks.length % 3 !== 0 ? 3 - looks.length % 3 : 0
    return (
      <Container>
        {this.props.items.map((look, i) => (
          <Look key={i} i={i} item={look} onClick={() => this.onClick(i)} />
        ))}
        {/* {times(whiteBlocks, i => <Look key={i} item={i} />)} */}
        {(modalIdx || modalIdx === 0) && (
          <Modal hideModal={this.hideModal} custom={custom}>
            <LookModal items={[]} selected={modalIdx} />
          </Modal>
        )}
      </Container>
    )
  }
}

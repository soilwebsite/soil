import React from 'react'
import Look from '../Look'
import { Container } from './ui'
import Modal from '../Modal'
import LookModal from '../Modal/components/slideshow'
import looks from '../../assets/images/ss18'

export default class LookGrid extends React.Component {

  constructor(props) {
    super(props)
    this.state = { modalItem: null }
    this.onClick = this.onClick.bind(this)
    this.hideModal = this.hideModal.bind(this)
  }

  onClick(item) {
    this.setState({ modalItem: item })
  }

  hideModal() {
    this.setState({ modalItem: null })
  }

  render() {
    const { modalItem } = this.state
    // if(content.length === 0) return <Spinner />
    let custom = {
      cloak: { opacity: 0.87 },
      content: { background: 'transparent' }
    }
    return (
      <Container>
        {looks.map((look, i) =>
          <Look key={i} src={look.images[0].url} onClick={() => this.onClick(look)} />
        )}
        {modalItem &&
          <Modal hideModal={this.hideModal} custom={custom}>
            <LookModal items={looks} />
          </Modal>
        }
      </Container>
    )
  }
}

import React from 'react'
import { shuffle } from 'lodash'
import Look from '../Look'
import Spinner from '../Spinner'
import { Container } from './ui'
import Modal from '../Modal'

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

  getItems() {
    const { items, filter } = this.props
    if(!items) return []
    let manyImages = shuffle(items.concat(items).concat(items).concat(items))
    if(filter) manyImages = manyImages.filter(i => i.tags.find(t => t.name === filter))
    return manyImages.map((item, i) =>
      <Look key={i} item={item} onClick={() => this.onClick(item)} />
    )
  }

  render() {
    const { modalItem } = this.state
    let content = this.getItems()
    if(content.length === 0) return <Spinner />

    return (
      <Container>
        {content}
        {modalItem &&
          <Modal content={modalItem} hideModal={this.hideModal} />
        }
      </Container>
    )
  }
}

import React, { Component } from 'react'
import LookGrid from '../../components/LookGrid'
import { Look } from './ui'

class LookClass extends Component {

  render() {
    return (
      <Look>
        <LookGrid items={this.props.products.data} />
      </Look>
    )
  }
}

export default LookClass

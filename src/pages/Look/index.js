import React, { Component } from 'react'
import LookGrid from '../../components/LookGrid'
import Spinner from '../../components/Spinner'
import { Look } from './ui'

class LookClass extends Component {

  render() {
    if({} || !this.props.products) return <Spinner />
    return (
      <Look>
        <LookGrid items={this.props.products.data} />
      </Look>
    )
  }
}

export default LookClass

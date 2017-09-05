import React, { Component } from 'react'
import ItemGrid from '../../components/ItemGrid'
import Sidebar from '../../components/Sidebar'
import { Shop } from './ui'

class ShopClass extends Component {
  constructor(props) {
    super(props)
    this.state = {
      filteredItems: null
    }
    this.setFilter = this.setFilter.bind(this)
  }

  componentWillMount() {
    if(!this.props.products) {
      return
    }
    this.setState({ filteredItems: this.props.products.data })
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filteredItems: nextProps.products.data })
  }

  setFilter(name) {
    if(!name) {
      this.setState({ filteredItems: this.props.products.data })
      return
    }
    let filteredItems = this.props.products.data.filter(i =>
      i.tags.find((t => t.name === name))
    )
    this.setState({ filteredItems })
  }

  render() {
    let { filteredItems } = this.state
    if(!this.props.products || !filteredItems) { return null }

    return (
      <Shop>
        <Sidebar items={this.props.tags.data} setFilter={this.setFilter} />
        <ItemGrid items={filteredItems} />
      </Shop>
    )
  }
}

export default ShopClass

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
  }

  componentWillReceiveProps(nextProps) {
    this.setState({ filteredItems: nextProps.products.data })
  }

  setFilter(name) {
    let filteredItems = this.props.tags.data.filter(i => {
      return i.name === name
    })
    this.setState({ filteredItems })
  }

  render() {
    let { filteredItems } = this.state
    if(!this.props.products || !filteredItems) { return null }
    let { data: items } = this.props.products

    return (
      <Shop>
        <Sidebar items={items} setFilter={this.setFilter} />
        <ItemGrid items={filteredItems} />
      </Shop>
    )
  }
}

export default ShopClass

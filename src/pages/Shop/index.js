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

  setFilter(productType) {
    let { data } = this.props.products
    if(!productType) { return this.setState({ filteredItems: data }) }
    var regex = new RegExp(productType)
    let filteredItems = data.filter(i => {
      if(!i.product_type) console.warn('Warning: No product type for ' + i.handle)
      return regex.test(i.product_type)})
    this.setState({ filteredItems })
  }

  render() {
    let { filteredItems } = this.state
    if(!this.props.products || !filteredItems) { return null }

    return (
      <Shop>
        <Sidebar productTypes={this.props.products.productTypes} setFilter={this.setFilter} />
        <ItemGrid items={filteredItems} />
      </Shop>
    )
  }
}

export default ShopClass

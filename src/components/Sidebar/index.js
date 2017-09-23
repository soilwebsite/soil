import React, { Component } from 'react'
import { Sidebar, ProductType } from './ui'

export default class SidebarClass extends Component {
  state = { active: 'All' }

  handleClick(productType) {
    let filterName = productType
    if(filterName === 'All') filterName = null
    this.setState({ active: productType })
    this.props.setFilter(filterName)
  }

  sidebarItems() {
    let types = ['All'].concat(this.props.productTypes)
    return types.map((productType, i) => {
      return (
        <ProductType
          key={i}
          onClick={this.handleClick.bind(this, productType)}
          active={this.state.active === productType}
        >
          {productType}
        </ProductType>
      )
    })
  }

  render() {
    return (
      <Sidebar>
        {this.sidebarItems()}
      </Sidebar>
    )
  }
}

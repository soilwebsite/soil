import React, { Component } from 'react'
import { Sidebar } from './ui'

export default class SidebarClass extends Component {
  state = { active: '' }

  handleClick(selection) {
    let filterName = selection.name
    if(filterName === 'All') filterName = null
    this.setState({ active: selection.name })
    this.props.setFilter(filterName)
  }

  sidebarItems() {
    return [{ name: 'All' }].concat(this.props.items).map((item, i) => {
      let cn = 'side-item'
      if(this.state.active === item.name) {
        cn += ' active'
      }

      return (
        <div key={i} className={cn} onClick={this.handleClick.bind(this, item)}>
          {item.name}
        </div>
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

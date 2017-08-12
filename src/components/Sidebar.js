import React, { Component } from 'react'

class Sidebar extends Component {
  state = { active: '' }
  handleClick(selection) {
    this.setState({ active: selection.name })
    console.log(selection)
    this.props.setFilter(selection.name)
  }
  sidebarItems() {
    return [{ name: 'All' }].concat(this.props.items).map((item, i) => {
      let cn = 'side-item'
      if(this.state.active === item.name) cn += ' active'
      return (<div key={i} className={cn} onClick={this.handleClick.bind(this, item)}>
        {item.name}
      </div>)
    })
  }

  render() {
    return (<nav className="Sidebar">
      {this.sidebarItems()}
    </nav>)
  }
}

export default Sidebar

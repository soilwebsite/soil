import React, { Component } from 'react';

class Sidebar extends Component {
  state = { active: '' }
  handleClick (item) {
    this.setState({ active: item.name })
    this.props.setFilter(item.name)
  }
  sidebarItems () {
    return this.props.items.map((item, i) => {
      let cn = 'side-item'
      if(this.state.active === item.name) cn += ' active'
      return <div key={i} className={cn} onClick={this.handleClick.bind(this, item)}>
        {item.name}
      </div>
    });
  }

  render() {
    return <nav className="Sidebar">
      {this.sidebarItems()}
    </nav>
  }
}

export default Sidebar

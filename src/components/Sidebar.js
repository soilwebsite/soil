import React, { Component } from 'react';

class Sidebar extends Component {

  sidebarItems () {
    return this.props.items.map((item, i) => {
      return (
        <div key={i} className='side-item' onClick={item.onClick}>
          {item.name}
        </div>
      );
    });
  }

  render() {
    return <nav className="Sidebar">
      {this.sidebarItems()}
    </nav>
  }
}

export default Sidebar

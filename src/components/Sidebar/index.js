import React, { Component } from 'react';

class Sidebar extends Component {

  sidebarItems () {
    return this.props.items.map((item, i) => {
      return (
        <div key={i} className='side-item' onClick={item.event}>
          {item.name}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="side-bar">
        <p className="nav_item filter">filter</p>
        <nav>
          {this.sidebarItems()}
        </nav>
      </div>
    );
  }
}

export default Sidebar

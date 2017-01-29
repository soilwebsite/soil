import React, { Component } from 'react';

class Sidebar extends Component {

  sidebarItems () {    
    return this.props.items.map(item => {
      return (
        <div className='side-item' onClick={item.event}>
          {item.name}
        </div>
      );
    });
  }

  render() {
    return (
      <div className="side-bar">
        <nav>
          {this.sidebarItems()}
        </nav>
      </div>
    );
  }
}

export default Sidebar

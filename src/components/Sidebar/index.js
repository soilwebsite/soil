import React, { Component } from 'react';

class Sidebar extends Component {

  constructor (props) {
    super(props);
  }

  sidebarItems () {
    const {items} = this.props;
    return items.map(item => {
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
    )
    // return (
    //   <div className="side-bar">
    //     <nav>
    //       <a className="side-item side-item_projects" data-name="projects-container" data-index="1" href="#">coat</a>
    //       <a className="side-item" data-name="a-propos" data-index="2" href="#">dress</a>
    //       <a className="side-item" data-name="presse" data-index="3" href="#">top</a>
    //       <a className="side-item" data-name="partenaires" data-index="4" href="#">bottom</a>
    //       <a className="side-item" data-name="contact" data-index="5" href="#">shoe</a>
    //     </nav>
    //   </div>
    // );
  }
}

export default Sidebar

import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
      <div className="side-bar">
        <nav>
          <a className="side-item side-item_projects" data-name="projects-container" data-index="1" href="/woman">woman</a>
          <a className="side-item" data-name="a-propos" data-index="2" href="#">dusty</a>
          <a className="side-item" data-name="presse" data-index="3" href="#" style={{fontSize: "16px"}}><b>Forest Tribe</b></a>
          <a className="side-item" data-name="partenaires" data-index="4" href="#">skin</a>
          <a className="side-item" data-name="contact" data-index="5" href="#">buy</a>
        </nav>
      </div>
    );
  }
}

export default Sidebar

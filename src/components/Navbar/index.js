import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <nav id="nav">
          <div id="nav_background"></div>
        <a className="nav_item nav_item_projects" data-name="projects-container" data-index="1" href="/woman">woman</a>
        <a className="nav_item" data-name="a-propos" data-index="2" href="/dusty">dusty</a>
        <a className="nav_item" data-name="presse" data-index="3" href="/" style={{fontSize: "16px"}}><b><h1>Forest Tribe</h1></b></a>
        <a className="nav_item" data-name="partenaires" data-index="4" href="/about">About</a>
        <a className="nav_item" data-name="contact" data-index="5" href="/">buy</a>
      </nav>
      </div>
    );
  }
}

export default Navbar

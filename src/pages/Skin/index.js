import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';
class Skin extends Component {
  render() {
    return (
      <div className="Skin">
        <Navbar />
          <Sidebar />
        Skin
      </div>
    );
  }
}

export default Skin;

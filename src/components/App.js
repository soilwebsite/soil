import React, { Component } from 'react';
import Navbar from '../Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar location={this.props.location} />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;

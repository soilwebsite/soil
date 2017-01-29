import React, { Component } from 'react';
import Navbar from '../components/Navbar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        {React.cloneElement(this.props.children, this.props)}
      </div>
    );
  }
}

export default App;

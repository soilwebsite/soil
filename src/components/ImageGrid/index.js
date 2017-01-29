import React, { Component } from 'react';

class Navbar extends Component {

  images () {
    const {images} = this.props;
    return images.map(image => {
      return (
        <div className='image'>
          <img src={image.url} alt={image.name} />
        </div>
      )
    })
  }
  render() {
    // {this.props.images}
    return (
      <div className="image-grid">
        {this.images()}
      </div>
    );
  }
}

export default Navbar

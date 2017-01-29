import React, { Component } from 'react';

class Navbar extends Component {

  images () {
    const {images} = this.props;
    const manyImages = images.concat(images);
    return manyImages.map((image, i) => {
      if (i % 4 === 0) {
        return (
          <div className='big grid-item'>
            <img src={image.url} alt={image.name} />
          </div>
        )
      }
      else if (!manyImages[i+1]) {
        return (
          <div className='grid-item'>
            <img src={image.url} alt={image.name} />
          </div>
        )
      }
      else if (i % 5 === 1 || i % 5 === 3) {
        return (
          <div className='two'>
            <div className='grid-item'>
              <img src={image.url} alt={image.name} />
            </div>
            <div className='grid-item'>
              <img src={manyImages[i+1].url} alt={manyImages[i+1].name} />
            </div>
          </div>
        )
      }
      return null;
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

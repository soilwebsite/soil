import React, { Component } from 'react';

class Navbar extends Component {

  images () {
    const {images} = this.props;
    const manyImages = images.concat(images);
    const nthBig = 5;
    let alreadyShowingNextItem = false;

    return manyImages.map((image, i) => {

      if (i % nthBig === 0 || !manyImages[i+1] || Math.random() > .7) {
        alreadyShowingNextItem = false;
        return (
          <div className='grid-item'>
            <img src={image.url} alt={image.name} />
          </div>
        )
      }
      else if (!alreadyShowingNextItem) {
        alreadyShowingNextItem = true;
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
      alreadyShowingNextItem = false;
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

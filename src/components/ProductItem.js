import React, { Component } from 'react'
import { Link } from 'react-router'

class ProductItem extends Component {

  // images () {
    // const nthBig = 5;
    // let alreadyShowingNextItem = false;
    // return manyImages.map((image, i) => {
      // if (i % nthBig === 0 || !manyImages[i+1] || Math.random() > .7) {
      //   alreadyShowingNextItem = false;
      //   return (
      //     <div className='ProductItem'>
      //       <img src={image.url} alt={image.name} />
      //     </div>
      //   )
      // }
      // else if (!alreadyShowingNextItem) {
      //   alreadyShowingNextItem = true;
      //   return (
      //     <div className='two'>
      //       <div className='ProductItem'>
      //         <img src={image.url} alt={image.name} />
      //       </div>
      //       <div className='ProductItem'>
      //         <img src={manyImages[i+1].url} alt={manyImages[i+1].name} />
      //       </div>
      //     </div>
      //   )
      // }
      // alreadyShowingNextItem = false;
      // return null;
    // })
  // }

  render() {
    const {item} = this.props;
    return (
      <Link to={`/clothing/${item.id}`} className='ProductItem'>
        <img src={item.imageUrl} alt={item.name} />
        <div className='info'>
          <h3>{item.name}</h3>
          <strong>${Math.floor(Math.random()*200)}</strong>
        </div>
      </Link>
    );
  }
}

export default ProductItem

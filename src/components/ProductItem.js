import React, { Component } from 'react';


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
    const productId = encodeURIComponent(item.name);
    return (
      <a className='ProductItem' href={`/clothing/${productId}`}>
        <img src={item.url} alt={item.name} />
        <div className='info'>
          <h3>{item.name}</h3>
          <strong>${Math.floor(Math.random()*200)}</strong>
        </div>
      </a>
    );
  }
}

export default ProductItem

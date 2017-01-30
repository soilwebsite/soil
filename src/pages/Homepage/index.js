import React, { Component } from 'react';

class Homepage extends Component {
  render() {
    const heroStyle = {
      backgroundImage: `url("https://assets2.thereformation.com/app/public/assets/products/92666/original/2017.jpg?1483491128&i10c=img.resize(width:2560)")`
    };
    return (
      <div className="Homepage">
        <div className="hero" style={heroStyle} />
      </div>
    );
  }
}

export default Homepage;

// <div className="content">
        //   <h1>We make killer clothes that don’t kill the environment.</h1>
        //   <div className='posts'>
        //     <div className='post'>
        //       <div className='picture'></div>
        //       <h2 className='title'>
        //         Beauty
        //       </h2>
        //       <p className='description'>
        //         We make killer clothes that don’t kill the environment. We make killer clothes that don’t kill the environment.
        //       </p>
        //     </div>
        //     <div className='post'>
        //       <div className='picture'></div>
        //       <h2 className='title'>
        //         Samoyeds
        //       </h2>
        //       <p className='description'>
        //         We make killer clothes that don’t kill the environment. We make killer clothes that don’t kill the environment.
        //       </p>
        //     </div>
        //     <div className='post'>
        //       <div className='picture'></div>
        //       <h2 className='title'>
        //         Vodka Life
        //       </h2>
        //       <p className='description'>
        //         We make killer clothes that don’t kill the environment. We make killer clothes that don’t kill the environment.
        //       </p>
        //     </div>
        //   </div>
        // </div>

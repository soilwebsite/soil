import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Sidebar from '../../components/Sidebar';

class Homepage extends Component {
  render() {
    return (
      <div className="Homepage">
        <Navbar />
        <Sidebar />
        <div className="hero" />
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

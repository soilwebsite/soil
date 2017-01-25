import React, { Component } from 'react';


class Woman extends Component {
  render() {
    return (
      <div className="Homepage">
        <div className="nav-bar">
          <nav id="nav">
            <div id="nav_background"></div>
          <a className="nav_item nav_item_projects" data-name="projects-container" data-index="1" href="#">woman</a>
          <a className="nav_item" data-name="a-propos" data-index="2" href="#">dusty</a>
          <a className="nav_item" data-name="presse" data-index="3" href="#" style={{fontSize: "16px"}}><b>Forest Tribe</b></a>
          <a className="nav_item" data-name="partenaires" data-index="4" href="#">skin</a>
          <a className="nav_item" data-name="contact" data-index="5" href="#">buy</a>
        </nav>
        </div>
      </div>
    );
  }
}

export default Woman;

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

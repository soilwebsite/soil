import React, { Component } from 'react';

class Homepage extends Component {

  componentDidMount () {
    this.refs.video.addEventListener('ended', this.replay.bind(this));
  }

  replay () {
    this.refs.video.currentTime = 0;
    this.refs.video.play();
  }

  render() {
    return (
      <div className="Homepage">
        <h2 class="textTitle">The Campaign</h2>
        <p>Discover the Summer 2017 campaign.</p>
        <div className="buttons">
          <a href="#">
            PRE-ORDER THE COLLECTION
          </a>
          &nbsp;
          <a href="#">
            EXPLORE THE CAMPAIGN
          </a>
        </div>
        <div className='video-container'>
          <video
            ref='video'
            autoPlay
            muted
            style={{objectFit:'cover', width:'100%', height:'100%'}}
            src={'http://localhost:3000/forest.mp4'}
            />
        </div>
      </div>
    );
    // <div className="hero" />
  }
}

export default Homepage;

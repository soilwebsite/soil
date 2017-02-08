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
    let videoURL = 'http://localhost:3000/forest.mp4';
    // <div className="hero" />
    return (
      <div className="Homepage">
        <video
          ref='video'
          autoPlay
          style={{objectFit:'cover', width:'100%', height:'100%'}}
          src={videoURL}
        />
      </div>
    );
  }
}

export default Homepage;

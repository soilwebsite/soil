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
    console.log(process.env);
    const {NODE_ENV} = process.env;
    let videoURL = NODE_ENV === 'development' ? 'http://localhost:3000/forest.mp4' : 'http://www.foresttribe.nyc/forest.mp4';
    return (
      <div className="Homepage">
        <h2 className="textTitle">The Campaign</h2>
        <p>Discover</p>
        <div className="buttons">
          <a href="#">
            THE COLLECTION
          </a>
          &nbsp;
          <a href="#">
            THE CAMPAIGN
          </a>
        </div>
        <div className='video-container'>
          <video
            ref='video'
            autoPlay
            muted
            style={{objectFit:'cover', width:'100%', height:'100%'}}
            src={videoURL}
            />
        </div>
      </div>
    );
    // <div className="hero" />
  }
}

export default Homepage;

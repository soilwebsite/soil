import React, { Component } from 'react'
// import forestVideo from '../../assets/forest.mp4';
import { Container, ActionBox, Background } from './ui'

class Homepage extends Component {
  // componentDidMount() {
  //   this.refs.video.addEventListener('ended', this.replay.bind(this));
  // }
  //
  // replay() {
  //   this.refs.video.currentTime = 0
  //   this.refs.video.play()
  // }

  render() {
    return (
      <Container>
        <Background />
        <ActionBox>
          <div>
            <a href="/collection">Explore</a>
            {/* &nbsp;
            <a href="/shop">SHOP</a> */}
          </div>
        </ActionBox>
        {/* <div className='video-container'>
          <video
            ref='video'
            autoPlay
            muted
            style={{objectFit:'cover', width:'100%', height:'100%'}}
            src={forestVideo}
            />
        </div>
        <div className='video-container-spacer' /> */}
      </Container>
    )
    // <div className="hero" />
  }
}

export default Homepage

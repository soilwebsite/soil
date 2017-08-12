import React, { Component } from 'react'

class NotFound extends Component {
  render() {
    const heroStyle = {
      backgroundImage: 'url("https://assets2.thereformation.com/app/public/assets/products/92666/original/2017.jpg?1483491128&i10c=img.resize(width:2560)")'
    }
    return (
      <div className="NotFound">
        404 Not found
        <div className="hero" style={heroStyle} />
      </div>
    )
  }
}

export default NotFound

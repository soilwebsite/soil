import React, { Component } from 'react'
import { Article } from './ui'
import Spinner from '../../components/Spinner'

class Blog extends Component {
  render() {
    let { wordpress } = this.props
    if(!wordpress) return <Spinner />
    return (
      <div className="Blog">
        {wordpress.data.posts.map((post, i) => {
          let html = { __html: post.content }
          return <Article key={i} dangerouslySetInnerHTML={html} />
        })}
      </div>
    )
  }
}

export default Blog

import React, { Component } from 'react';
import { Article } from './ui'
import Spinner from '../../components/Spinner'
import styled from 'styled-components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`

const Preview = styled.article`
  border: 1px solid gray;
  height: 300px;
  width: 200px;
  margin: 20px;
  margin: 50px auto 100px;
  overflow: hidden;
  padding: 0 10px;
  & p {
    & img {
      max-width: 200px;
      height: auto;
    }
    text-align: left;
    line-height: 24px;
    ${'' /* white-space: nowrap; */}
    ${'' /* overflow: hidden; */}
    text-overflow: ellipsis;
  }
`


class Blog extends Component {
  render() {
    let { wordpress } = this.props
    if (!wordpress) return <Spinner />
    return (
      <Container>
        {wordpress.data.posts.map((post, i) => {
          let html = { __html: `<h2>${post.title}</h2> `+ post.content }
          return <Preview key={i} dangerouslySetInnerHTML={html} />
        })}
      </Container>
    );
  }
}

export default Blog

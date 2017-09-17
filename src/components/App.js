import React, { Component } from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import { fetchProducts } from '../actions/product'
import { fetchImages } from '../actions/image'
import { fetchTags } from '../actions/tag'
import { fetchPosts } from '../actions/wordpress'
import theme from '../theme'
import store from '../store'
import Navbar from './Navbar'
import Footer from './Footer'

let Container = styled.div`
  width: 100%;
  height: 100%;
`

class App extends Component {

  componentDidMount() {
    store.dispatch(fetchProducts())
    .then(() => store.dispatch(fetchImages()))
    .then(() => store.dispatch(fetchTags()))
    .then(() => store.dispatch(fetchPosts()))
    .then(() => {
      let state = store.getState()
      console.log('state', state)
      this.setState(state)
    })
    .catch(err => console.error(err))
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <Container>
          <Navbar location={this.props.location} />
          {React.cloneElement(
              this.props.children,
              { ...this.props, ...this.state }
            )}
          <Footer />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App

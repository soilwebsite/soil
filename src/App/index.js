import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
import { fetchProducts } from '../actions/product'
// import { fetchImages } from '../actions/image'
// import { fetchTags } from '../actions/tag'
// import { fetchPosts } from '../actions/wordpress'
import theme from '../theme'
import store from '../store'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container } from './ui'

class App extends Component {
  state = { showNav: false }
  componentDidMount() {
    this.setShowNav(this.props)
    store
      .dispatch(fetchProducts())
      // .then(() => store.dispatch(fetchImages()))
      // .then(() => store.dispatch(fetchTags()))
      // .then(() => store.dispatch(fetchPosts()))
      .then(() => {
        let state = store.getState()
        console.log('state', state)
        this.setState(state)
      })
      .catch(err => console.error(err))
  }

  componentWillReceiveProps(nextProps, nextState) {
    if (this.props.location.pathname !== location.pathname) this.setShowNav(nextProps)
  }

  setShowNav(props) {
    let showNav = true
    showNav = props.location.pathname !== '/'
    this.setState({ showNav })
  }

  render() {
    console.log(this.props.location)
    let { showNav } = this.state
    return (
      <ThemeProvider theme={theme}>
        <Container>
          {showNav && <Navbar location={this.props.location} />}
          {React.cloneElement(this.props.children, { ...this.props, ...this.state })}
          <Footer location={this.props.location} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App

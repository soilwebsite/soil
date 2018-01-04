import React, { Component } from 'react'
import { ThemeProvider } from 'styled-components'
// import { fetchProducts } from '../actions/product'
// import { fetchImages } from '../actions/image'
// import { fetchTags } from '../actions/tag'
// import { fetchPosts } from '../actions/wordpress'
// import store from '../store'
import theme from '../theme'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Container, Content } from './ui'
import getProducts from './shopify'

class App extends Component {
  state = { showNav: false }
  componentDidMount() {
    this.setShowNav(this.props)
    getProducts().then((collections = {}) => this.setState({ collections }))
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
    let { showNav } = this.state
    return (
      <ThemeProvider theme={theme}>
        <Container className="App" innerRef={x => (this.scrollDiv = x)}>
          {showNav && <Navbar scrollDiv={this.scrollDiv} location={this.props.location} />}
          <Content className="content">
            {React.cloneElement(this.props.children, { ...this.props, ...this.state })}
          </Content>
          <Footer location={this.props.location} />
        </Container>
      </ThemeProvider>
    )
  }
}

export default App

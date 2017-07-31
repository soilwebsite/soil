import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/App'

import Homepage from './pages/Homepage'
import ComingSoon from './pages/ComingSoon'
import Clothing from './pages/Clothing'
import Product from './pages/Product'
import About from './pages/About'
import Blogs from './pages/Blogs'
import Blog from './pages/Blog'
import Cart from './pages/Cart'
import SignIn from './pages/SignIn'

import NotFound from './pages/NotFound'

const Routes = (props) => {
  return <Router {...props}>
    <Route path="/" component={App}>

      <IndexRoute component={Homepage} />
      <Route path="/impressions/:post" component={Blog} />
      <Route path="/impressions" component={Blogs} />
      <Route path="/*" component={ComingSoon} />
      <Route path="/clothing" component={Clothing} />
      <Route path="/clothing/:id" component={Product} />
      <Route path="/about" component={About} />

      <Route path="/bag" component={Cart} />
      <Route path="/account" component={SignIn} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
}

export default Routes;

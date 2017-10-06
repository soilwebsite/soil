import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './App'

import Homepage from './pages/Homepage'
import Shop from './pages/Shop'
import Look from './pages/Look'
import Product from './pages/Product'
import About from './pages/About'
import Contact from './pages/Contact'
import Legal from './pages/Legal'
import SignIn from './pages/SignIn'
import Cart from './pages/Cart'
// import Blogs from './pages/Blogs'
// import Blog from './pages/Blog'
import ComingSoon from './pages/ComingSoon'
import NotFound from './pages/NotFound'

const Routes = props => {
  return (
    <Router {...props}>
      <Route path="/" component={App}>
        <IndexRoute component={Homepage} />
        {/* <Route path="/impressions/:post" component={Blog} />
      <Route path="/impressions" component={Blogs} /> */}
        <Route path="/shop" component={Shop} />
        <Route path="/shop/:id" component={Product} />
        <Route path="/collection" component={Look} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route path="/terms-and-privacy" component={Legal} />
        <Route path="/*" component={ComingSoon} />
        <Route path="/account" component={SignIn} />
        <Route path="/bag" component={Cart} />

        <Route path="*" component={NotFound} />
      </Route>
    </Router>
  )
}

export default Routes

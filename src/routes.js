import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/App'

import Homepage from './pages/Homepage'
import Clothing from './pages/Clothing'
// import Dusty from './pages/Dusty'
import SignIn from './pages/SignIn'
import About from './pages/About'
import Mission from './pages/Mission'
import Cart from './pages/Cart'
import NotFound from './pages/NotFound'


const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>

      <IndexRoute component={Homepage} />
      <Route path="/clothing" component={Clothing} />
      <Route path="/about" component={About} />
      <Route path="/mission" component={Mission} />
      
      <Route path="/cart" component={Cart} />
      <Route path="/signin" component={SignIn} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;

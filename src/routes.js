import React from 'react';
import { Router, Route } from 'react-router';

import Homepage from './pages/Homepage';
import About from './pages/About';
import Woman from './pages/woman';
import NotFound from './pages/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Homepage} />
    <Route path="/about" component={About} />
    <Route path="/woman" component={Woman} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

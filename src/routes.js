import React from 'react';
import { Router, Route } from 'react-router';

import Homepage from './pages/Homepage';
import Woman from './pages/Woman';
import Dusty from './pages/Dusty';
import Skin from './pages/Skin';
import Buy from './pages/Buy';
import NotFound from './pages/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Homepage} />
    <Route path="/woman" component={Woman} />
    <Route path="/dusty" component={Dusty} />
    <Route path="/skin" component={Skin} />
    <Route path="/buy" component={Buy} />
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

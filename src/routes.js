import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './App';

import Homepage from './pages/Homepage';
import Woman from './pages/Woman';
import Dusty from './pages/Dusty';
import Skin from './pages/Skin';
import Buy from './pages/Buy';
import NotFound from './pages/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>
      <IndexRoute component={Homepage} />

      <Route path="/woman" component={Woman} />
      <Route path="/dusty" component={Dusty} />
      <Route path="/skin" component={Skin} />
      <Route path="/buy" component={Buy} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;

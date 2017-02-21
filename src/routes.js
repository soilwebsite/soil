import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import App from './components/App';

import Homepage from './pages/Homepage';
import Woman from './pages/Woman';
import Dusty from './pages/Dusty';
import About from './pages/About';
import Buy from './pages/Buy';
import NotFound from './pages/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App}>

      <IndexRoute component={Homepage} />
      <Route path="/woman" component={Woman} />
      <Route path="/dusty" component={Dusty} />
      <Route path="/about" component={About} />
      <Route path="/buy" component={Buy} />

      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;

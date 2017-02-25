import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from './reducers'
let store = createStore(reducers)

import Routes from './routes';
import { browserHistory } from 'react-router'

import './styles/index.scss';

render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>,
  document.getElementById('root')
)

import React from 'react';
import { render } from 'react-dom'
import Routes from './routes';
import { browserHistory } from 'react-router'
import './styles/index.scss';
console.log("process.env.REACT_APP_API_DOMAIN")
console.log(process.env.REACT_APP_API_DOMAIN)

render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
)

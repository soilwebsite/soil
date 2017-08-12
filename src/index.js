import React from 'react'
import { render } from 'react-dom'
import Routes from './routes'
import { browserHistory } from 'react-router'
import './styles/index.scss'

render(
  <Routes history={browserHistory} />,
  document.getElementById('root')
)

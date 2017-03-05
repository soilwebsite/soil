import { combineReducers } from 'redux'
import products from './products'
import tags from './tags'

const reducers = combineReducers({
  products,
  tags
})

export default reducers

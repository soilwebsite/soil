import { combineReducers } from 'redux'
import products from './products'
import tags from './tags'
import wordpress from './wordpress'

const reducers = combineReducers({
  products,
  tags,
  wordpress
})

export default reducers

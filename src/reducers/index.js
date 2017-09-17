import { combineReducers } from 'redux'
import products from './products'
import tags from './tags'
import images from './images'
import wordpress from './wordpress'

const reducers = combineReducers({
  products,
  tags,
  images,
  wordpress
})

export default reducers

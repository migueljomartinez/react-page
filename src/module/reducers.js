import { combineReducers } from 'redux'
import productsReducer from './products/reducers'


export default combineReducers({
  products: productsReducer
})

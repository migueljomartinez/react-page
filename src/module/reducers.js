import { combineReducers } from 'redux'
import productsReducer from './products/reducers'
import contactReducer from './contact/reducers'

export default combineReducers({
  products: productsReducer,
  contact: contactReducer,
})

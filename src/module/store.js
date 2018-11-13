import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger'
import reducers from './reducers'

const middleware = [thunk]

if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(
  reducers,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() // eslint-disable-line
  )// eslint-disable-line
)

export default store

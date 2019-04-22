import { applyMiddleware, compose, createStore } from 'redux'

import combineReducers from '../reducers'

import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default createStore(
  combineReducers,
  composeEnhancers(
    applyMiddleware(thunk),
  ),
)

import { createStore, applyMiddleware } from 'redux'
import {rootReducer} from './reducers'
import { authMiddleware } from './middlewares/authMiddleware'
import { cardMiddleware } from './middlewares/cardMiddleware'

export const store = createStore(
  rootReducer, 
  applyMiddleware(authMiddleware, cardMiddleware)
)

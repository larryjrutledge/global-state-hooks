import combineReducers from './combineReducers'
import themeReducer from './themeReducer'
import eventReducer from './eventReducer'

const reducer = combineReducers({
  theme: themeReducer,
  events: eventReducer
})

export default reducer

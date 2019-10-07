import React from 'react'

import { Provider } from 'src/config/Store'
import mainReducer from 'src/reducers'

import initialState from 'src/config/initialState'

import HomeScreen from 'src/screens/HomeScreen'

export default function App() {
  return (
    <Provider reducer={mainReducer} initialState={initialState}>
      <HomeScreen />
    </Provider>
  )
}

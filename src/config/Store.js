import React, { createContext, useReducer, useContext } from 'react'

import reducer from 'src/reducers'
import applyMiddleware from 'src/config/middleware'

import useActions from 'src/actions/actions'
import initialState from 'src/config/initialState'

const StoreContext = createContext(initialState)

export const Provider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)
  // attach middleware to capture every dispatch
  const enhancedDispatch = applyMiddleware(dispatch)

  const actions = useActions(state, enhancedDispatch)

  return (
    <StoreContext.Provider value={{ state, enhancedDispatch, actions }}>
      {children}
    </StoreContext.Provider>
  )
}

export const useStore = () => {
  return useContext(StoreContext)
}

export const connect = (
  mapStateToProps = () => {},
  mapDispatchToProps = () => {}
) => WrappedComponent => {
  return props => {
    const { state, dispatch, actions } = useContext(StoreContext)

    return (
      <WrappedComponent
        dispatch={dispatch}
        actions={actions}
        {...mapStateToProps(state, props)}
        {...mapDispatchToProps(dispatch, actions, props)}
      />
    )
  }
}

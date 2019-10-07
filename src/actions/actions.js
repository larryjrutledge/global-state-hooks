import actionTypes from './actionTypes'

const useActions = (state, dispatch) => ({
  changeTheme: data =>
    dispatch({ type: actionTypes.CHANGE_THEME, payload: data }),
  blogFetch: data =>
    dispatch({ type: actionTypes.BLOG_FETCH_INITIAL, payload: data })
})

export default useActions

import actionTypes from 'src/actions/actionTypes'
import themes from 'src/config/themes'

const themeReducer = (state, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_THEME:
      return {
        ...state,
        selectedTheme: action.payload,
        styles: { ...themes['default'], ...themes[action.payload] }
      }
    default:
      return state
  }
}

export default themeReducer

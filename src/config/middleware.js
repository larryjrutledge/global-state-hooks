import axios from 'axios'
import actionTypes from 'src/actions/actionTypes'

const applyMiddleware = dispatch => action => {
  switch (action.type) {
    case actionTypes.BLOG_FETCH_INITIAL:
      axios
        .get('http://api.plos.org/search?q=title:DNA')
        .then(serverResponse =>
          // process feed data via reducer
          console.log('AXIOUS: ', serverResponse.data)
        )
        .catch(error => {
          if (error.response) {
            console.group('AXIOS Response Error')
            console.log('Error Data: ', error.response.data)
            console.log('Error Status: ', error.response.status)
            console.log('Error Headers: ', error.response.headers)
            console.groupEnd()
          } else if (error.request) {
            console.group('AXIOS Request Error')
            console.log('Request: ', error.request._response)
            console.groupEnd()
          } else {
            console.group('AXIOS General Error')
            console.log('Error: ', error)
            console.groupEnd()
          }
        })
    default:
      dispatch(action)
  }
}

export default applyMiddleware

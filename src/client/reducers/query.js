import { REQUEST_RECEIVED, REQUEST_SEND, REQUEST_ERROR } from '../constants/actions';
const defaultState = {
  isFetching: false,
  response: null,
  error: null
}

function query(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error
      })
    case REQUEST_SEND:
      return Object.assign({}, state, {
        isFetching: true,
        response: null,
        error: null
      })
    case REQUEST_RECEIVED:
      return Object.assign({}, state, {
        isFetching: false,
        response: action.payload.response
      })
    default:
      return state;
  }
}
export default query;
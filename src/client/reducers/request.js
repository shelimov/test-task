import { REQUEST_RECEIVED, REQUEST_SEND, REQUEST_ERROR } from '../constants/actions';
const defaultState = {
  isFetching: false,
  response: null,
  error: null,
  uri: null
}

function request(state = defaultState, action) {
  switch (action.type) {
    case REQUEST_SEND:
      return Object.assign({}, state, {
        isFetching: true,
        response: null,
        error: false,
        uri: action.payload.uri
      });
    case REQUEST_RECEIVED:
      return Object.assign({}, state, {
        isFetching: false,
        response: action.payload.response
      });
    case REQUEST_ERROR:
      return Object.assign({}, state, {
        isFetching: false,
        error: action.payload.error
      });
    default:
      return state;
  }
}
export default request;
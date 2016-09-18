import { 
  REQUEST_SEND, REQUEST_RECEIVED, REQUEST_ERROR 
} from '../constants/actions';
export function requestSend(uri, options = {}) {
  return {
    type: REQUEST_SEND,
    fetch: {
      uri,
      options
    }
  }
}
export function requestReceived(response) {
  return {
    type: REQUEST_RECEIVED,
    payload: {
      response
    }
  }
}
export function requestError(error) {
  return {
    type: REQUEST_ERROR,
    payload: {
      error
    }
  }
}
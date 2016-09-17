import { 
  REQUEST_SEND, REQUEST_RECEIVED, REQUEST_ERROR 
} from '../constants/actions';
export function requestSend(uri) {
  return {
    type: REQUEST_SEND,
    payload: {
      uri
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
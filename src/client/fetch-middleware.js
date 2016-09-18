import 'isomorphic-fetch';
import { REQUEST_SEND } from './constants/actions';
import { requestReceived, requestError } from './actions/request';

const fetchMiddleware = () => next => action => {
  if (action.type != REQUEST_SEND)
    return next(action);
  const f = action.fetch;
  
  if (!f)
    return next(action);
  
  next({
    type: REQUEST_SEND,
    payload: {
      uri: f.uri
    }
  });
  return fetch(f.uri, f.options)
    .then(resp => resp.json())
    .then(
      resp => {
        next(requestReceived(resp));
        return resp;
      },
      error => {
        next(requestError(error));
        return error;
      }
    );
}
export default fetchMiddleware;
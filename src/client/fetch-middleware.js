import 'isomorphic-fetch';

const fetchMiddleware = () => next => action => {
  return next(action);
}
export default fetchMiddleware;
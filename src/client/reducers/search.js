import { CHANGE_SEARCH_BY, CHANGE_SEARCH_TEXT, CHANGE_SEARCH_DATA } from '../constants/actions';
const defaultState = {
  by: 'name',
  query: null,
  data: []
}
function search(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_SEARCH_BY:
      return Object.assign({}, state, {
        by: action.payload.by
      });
    case CHANGE_SEARCH_TEXT:
      return Object.assign({}, state, {
        query: action.payload.query
      });
    case CHANGE_SEARCH_DATA:
      return Object.assign({}, state, {
        data: action.payload.data
      });
    default:
      return state;
  }
}
export default search;
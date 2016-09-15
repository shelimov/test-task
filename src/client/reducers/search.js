import { CHANGE_SEARCH_BY, CHANGE_SEARCH_TEXT, CHANGE_SEARCH_DATA } from '../constants/actions';
const defaultState = {
  by: null,
  text: null,
  data: []
}
function search(state = defaultState, action) {
  let { by, text, data } = action.payload;
  switch (action.type) {
    case CHANGE_SEARCH_BY:
      return Object.assign({}, state, {
        by
      });
    case CHANGE_SEARCH_TEXT:
      return Object.assign({}, state, {
        text
      });
    case CHANGE_SEARCH_DATA:
      return Object.assign({}, state, {
        data
      });
    default:
      return state;
  }
}
export default search;
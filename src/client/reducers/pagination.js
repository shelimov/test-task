import { CHANGE_PAGE, CHANGE_AVAILABLE_PAGES } from '../constants/actions';
const defaultState = {
  page: null,
  available: null
}
function pagination(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return Object.assign({}, state, {
        page: action.payload.page
      });
    case CHANGE_AVAILABLE_PAGES:
      return Object.assign({}, state, {
        available: action.payload.available
      });
    default:
      return state;
  }
}
export default pagination;
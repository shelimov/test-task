import { CHANGE_CONTENT } from '../constants/actions';
const defaultState = [];
function content(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CONTENT:
      return action.payload;
    default:
      return state;
  }
}
export default content;

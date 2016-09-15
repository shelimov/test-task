import { CHANGE_CONTENT } from '../constants/actions';
const defaultState = {
  content: []
}
function content(state = defaultState, action) {
  switch (action.type) {
    case CHANGE_CONTENT:
      return {
        content: action.payload.content
      }
    default:
      return state;
  }
}
export default content;

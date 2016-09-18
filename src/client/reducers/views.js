import {
  CHANGE_CONTENT, CHANGE_PAGE, CHANGE_AVAILABLE_PAGES,
  UPDATE_ROW
} from '../constants/actions';

const defaultStatePagination = {
  available: null,
  page: null
}
const defaultStateView = {
  pagination: Object.assign({}, defaultStatePagination),
  data: []
};
const defaultStateViews = {
  all: Object.assign({}, defaultStateView),
  search: Object.assign({}, defaultStateView)
}

function views(state = defaultStateViews, action) {
  switch (action.type) {
    case CHANGE_PAGE:
    case CHANGE_CONTENT:
    case CHANGE_AVAILABLE_PAGES:
      return Object.assign({}, state, {
        [action.payload.view]: view(state[action.payload.view], action)
      });
    case UPDATE_ROW:
      return 
    default:
      return state;
  }
}

function view(state = defaultStateView, action) {
  switch (action.type) {
    case CHANGE_PAGE:
    case CHANGE_AVAILABLE_PAGES:
      return Object.assign({}, state, {
        pagination: pagination(state.pagination, action)
      });
    case CHANGE_CONTENT:
      return Object.assign({}, state, {
        data: action.payload.data
      });
    default:
      return state;
  }
}

function pagination(state = defaultStatePagination, action) {
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
export default views;

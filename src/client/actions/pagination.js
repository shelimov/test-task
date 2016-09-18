import { CHANGE_PAGE, CHANGE_AVAILABLE_PAGES } from '../constants/actions';

export function changePage(view, page) {
  return {
    type: CHANGE_PAGE,
    payload: {
      view, page
    }
  }
}
export function changeAvailable(view, available) {
  return {
    type: CHANGE_AVAILABLE_PAGES,
    payload: {
      view, available
    }
  }
}
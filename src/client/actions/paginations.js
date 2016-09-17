import { CHANGE_PAGE, CHANGE_AVAILABLE_PAGES } from '../constants/actions';

export function changePage(page) {
  return {
    type: CHANGE_PAGE,
    payload: {
      page
    }
  }
}
export function changeAvailable(available) {
  return {
    type: CHANGE_AVAILABLE_PAGES,
    payload: {
      available
    }
  }
}
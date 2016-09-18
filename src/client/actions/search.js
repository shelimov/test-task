import { CHANGE_SEARCH_BY, CHANGE_SEARCH_TEXT } from '../constants/actions';
export function changeSearchBy(by) {
  return {
    type: CHANGE_SEARCH_BY,
    payload: {
      by 
    }
  }
}
export function changeSearchText(query) {
  return {
    type: CHANGE_SEARCH_TEXT,
    payload: {
      query
    }
  }
}
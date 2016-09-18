import { CHANGE_CONTENT, UPDATE_ROW } from '../constants/actions';

export function changeContent(view, content) {
  return {
    type: CHANGE_CONTENT,
    payload: {
      data: content,
      view
    }
  }
}
export function updateRow(row) {
  return {
    type: UPDATE_ROW,
    payload: {
      row
    }
  }
}
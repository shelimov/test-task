import { CHANGE_CONTENT } from '../constants/actions';

export function changeContent(content) {
  return {
    type: CHANGE_CONTENT,
    payload: content
  }
}
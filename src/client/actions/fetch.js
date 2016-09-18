import { API_URL, ROWS_PER_PAGE } from '../constants/other';
import { requestSend } from './request';
import { changeContent, updateRow } from './content';
import { changePage, changeAvailable } from './pagination'

const calcAvailable = count => Math.ceil(count / ROWS_PER_PAGE);
// update methods
export const getReps = page => (dispatch, getState) => {
  const { pagination } = getState();
  dispatch(requestSend(`${API_URL}reps/${page || pagination.page}`))
    .then(({list, count}) => {
      dispatch(changePage('all', page));
      dispatch(changeAvailable('all', calcAvailable(count)));
      dispatch(changeContent('all', list));
    });
}
export const searchReps = page => (dispatch, getState) => {
  const { search, pagination } = getState(),
        { by, query } = search;
  
  if (!query)
    return;
  
  const uri = `${API_URL}search/${page || pagination.page}/?by=${by}&q=${query}`;
  dispatch(requestSend(uri))
    .then(({list, count}) => {
      dispatch(changePage('search', page))
      dispatch(changeAvailable('search', calcAvailable(count)));
      dispatch(changeContent('search', list));
    });
}
export const setType = (id, type) => (dispatch) => {
  let headers = new Headers({
    'Content-Type': 'application/json; charset=utf-8'
  });
  let body = JSON.stringify({id, type});
  dispatch(requestSend(`${API_URL}rep`, { method: 'post', body, headers}))
    .then(resp => dispatch(updateRow(resp)));
}
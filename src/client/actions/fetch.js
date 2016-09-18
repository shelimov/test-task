import { API_URL, ROWS_PER_PAGE } from '../constants/other';
import { requestSend } from './request';
import { changeContent } from './content';
import { changeSearchText, changeSearchData } from './search';
import { changePage, changeAvailable } from './pagination'

const calcAvailable = count => Math.ceil(count / ROWS_PER_PAGE);
// update methods
export const getReps = page => (dispatch, getState) => {
  const { pagination } = getState();
  dispatch(requestSend(`${API_URL}reps/${page || pagination.page}`))
    .then(({list, count}) => {
      dispatch(changePage(page));
      dispatch(changeAvailable(calcAvailable(count)));
      dispatch(changeContent(list));
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
      dispatch(changePage(page))
      dispatch(changeAvailable(calcAvailable(count)));
      dispatch(changeSearchData(list));
    });
}
export const setType = (id, type) => (dispatch) => {
  dispatch(requestSend(`${API_URL}/rep`, {
    method: 'post',
  }));
}
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import pagination from './reducers/pagination';
import content from './reducers/content';
import search from './reducers/search';
import query from './reducers/query';
const rootReducer = combineReducers({
  content,
  pagination,
  search,
  query
});
const store = createStore(rootReducer, applyMiddleware(thunk));
export default store;
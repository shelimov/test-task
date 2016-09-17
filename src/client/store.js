import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import fetch from './fetch-middleware';
import pagination from './reducers/pagination';
import content from './reducers/content';
import search from './reducers/search';
import request from './reducers/request';
const rootReducer = combineReducers({
  content,
  pagination,
  search,
  request
});
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  applyMiddleware(fetch),
  (window.devToolsExtension ? window.devToolsExtension() : f => f)
));
export default store;
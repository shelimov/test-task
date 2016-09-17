import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
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
const store = createStore(rootReducer, compose(
  applyMiddleware(thunk),
  (window.devToolsExtension ? window.devToolsExtension() : f => f)
));
export default store;
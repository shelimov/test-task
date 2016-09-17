/*~entry point~*/
import React from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
import './index.sass';
import Pagination from './components/pagination';
import Search from './components/search';
import Content from './components/table';
import { COLUMN_TYPES } from './constants/other';
import { changeSearchBy } from './actions/search';

const mapStateToPropsPagination = state => {
  return {
    current: state.pagination.page,
    pages: state.pagination.available
  }
}
const mapStateToPropsSearch = state => {
  return {
    types: COLUMN_TYPES,
    activeType: state.search.by || Object.keys(COLUMN_TYPES)[0]
  }
}
const mapStateToPropsContent = state => {
  return {
    content: state.search.text == '' ? state.content : state.search.data,
    isLoading: state.query.isFetching
  }
}
const mapDispatchToPropsPagination = dispatch => {
  return {
    pageChange: f => f
  }
}
const mapDispatchToPropsSearch = dispatch => {
  return {
    textChange: f => f,
    typeChange: type => dispatch(changeSearchBy(type))
  }
}
const mapDispatchToPropsContent = dispatch => {
  return {

  }
}

const root = document.getElementById('root');
const ContentContainer = connect(mapStateToPropsContent, mapDispatchToPropsContent)(Content);
const SearchContainer = connect(mapStateToPropsSearch, mapDispatchToPropsSearch)(Search);
const PaginationContainer = connect(mapStateToPropsPagination, mapDispatchToPropsPagination)(Pagination);
const App = () => (
  <div id="app">
    <ContentContainer/>
    <SearchContainer/>
    <PaginationContainer/>
  </div>
);

render(
  <Provider store={store}>
    <App/>
  </Provider>
, root);
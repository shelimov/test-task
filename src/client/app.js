import './app.sass';
import React from 'react';
import Pagination from './components/pagination';
import Search from './components/search';
import Content from './components/table';
import { connect } from 'react-redux';
import { changeSearchBy, changeSearchText } from './actions/search';
import { getReps, searchReps, setType } from './actions/fetch';
import { SEARCH_DELAY } from './constants/other';
import delayedFunction from './utils/delayed-function';
const mapStateToPropsPagination = state => {
  return {
    current: state.pagination.page,
    pages: state.pagination.available
  }
}
const mapStateToPropsSearch = state => {
  return {
    activeType: state.search.by
  }
}
const mapStateToPropsContent = state => {
  return {
    content: state.search.query ? state.search.data : state.content,
    isLoading: state.request.isFetching
  }
}
const mapDispatchToPropsPagination = dispatch => {
  return {
    pageChange: page => dispatch(getReps(page))
  }
}
const mapDispatchToPropsSearch = dispatch => {
  const search = delayedFunction(() => dispatch(searchReps(1)), SEARCH_DELAY);
  return {
    textChange: q => {
      dispatch(changeSearchText(q));
      search();
    },
    typeChange: type => dispatch(changeSearchBy(type))
  }
}
const mapDispatchToPropsContent = dispatch => {
  return {
    typeChange: (type, id) => dispatch(setType(type, id))
  }
}

 
const
  ContentContainer = connect(mapStateToPropsContent, mapDispatchToPropsContent)(Content),
  SearchContainer = connect(mapStateToPropsSearch, mapDispatchToPropsSearch)(Search),
  PaginationContainer = connect(mapStateToPropsPagination, mapDispatchToPropsPagination)(Pagination);

const App = () => (
  <div id="app">
    <ContentContainer/>
    <SearchContainer/>
    <PaginationContainer/>
  </div>
);
export default App;
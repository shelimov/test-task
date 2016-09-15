import react from 'react';
import { render } from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './store';
import Pagination from './components/pagination';
import Search from './components/search';
import Content from './components/table';

const root = document.getElementById('root');

const mapStateToPropsPagination = state => {
  return {
    current: state.pagination.page,
    pages: state.pagination.available
  }
}
const mapStateToPropsSearch = state => {
  return {

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
    
  }
}
const mapDispatchToPropsContent = dispatch => {
  return {

  }
}

const ContentContainer = connect(mapStateToPropsContent, mapDispatchToPropsContent)(Content);
const SearchContainer = connect(mapStateToPropsSearch, mapDispatchToPropsSearch)(Search);
const PaginationContainer = connect(mapStateToPropsPagination, mapDispatchToPropsPagination)(Pagination);

render(
  <Provider store={store}>
    <ContentContainer/>
    <SearchContainer/>
    <PaginationContainer/>
  </Provider>
, root);
import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Sorting from './Sorting';
import Results from './Results';
import Pagination from './Pagination';

export default class Listings extends Component {
  render() {
    return (
      <ListingsWrapper>
        <SearchBar />
        <Sorting />
        <Results />
        <Pagination />
      </ListingsWrapper>
    );
  }
}

const ListingsWrapper = styled.section`
  background: firebrick;
`;

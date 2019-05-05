import React, { Component } from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Sorting from './Sorting';
import Results from './Results';
import Pagination from './Pagination';
// import { Colors } from '../../utils/Colors';

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
  padding: 2rem;
`;

import React, { Component } from 'react';
import styled from 'styled-components';
import SearchListings from './SearchListings';
import SortListings from './SortListings';
import ListingResults from './ListingResults';
import ListingPages from './ListingPages';

export default class Listings extends Component {
  render() {
    return (
      <ListingsWrapper>
        <SearchListings />
        <SortListings />
        <ListingResults />
        <ListingPages />
      </ListingsWrapper>
    );
  }
}

const ListingsWrapper = styled.section`
  background: firebrick;
`;

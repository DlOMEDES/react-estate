import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/Colors';

const SearchBar = () => {
  return (
    <React.Fragment>
      <SearchContainer>
        <Search>
          <input type="text" name="search" placeholder="Search Listings" />
        </Search>
      </SearchContainer>
    </React.Fragment>
  );
};
export default SearchBar;

const SearchContainer = styled.section``;

const Search = styled.section`
  input {
    width: 70%;
    background: transparent;
    font-size: 2rem;
    border: none;
    border-bottom: 1px solid ${Colors.darkGrey};
    margin: 2rem 0;
  }
`;

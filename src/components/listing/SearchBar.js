import React from 'react';
import styled from 'styled-components';

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

const SearchContainer = styled.section`
  background: limegreen;
`;

const Search = styled.section``;

import React from 'react';
import styled from 'styled-components';

const SearchListings = () => {
  return (
    <React.Fragment>
      <SearchContainer>
        <h3>Search Listings</h3>
      </SearchContainer>
    </React.Fragment>
  );
};
export default SearchListings;

const SearchContainer = styled.section`
  background: limegreen;
`;

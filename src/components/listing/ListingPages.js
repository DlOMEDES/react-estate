import React from 'react';
import styled from 'styled-components';

const ListingPages = () => {
  return (
    <React.Fragment>
      <Pagination>
        <h3>Pagination</h3>
      </Pagination>
    </React.Fragment>
  );
};

export default ListingPages;

const Pagination = styled.section`
  background: lightgrey;
`;

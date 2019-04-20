import React from 'react';
import styled from 'styled-components';

const Pagination = () => {
  return (
    <React.Fragment>
      <PagesContainer>
        <h3>Pagination</h3>
      </PagesContainer>
    </React.Fragment>
  );
};

export default Pagination;

const PagesContainer = styled.section`
  background: lightgrey;
`;

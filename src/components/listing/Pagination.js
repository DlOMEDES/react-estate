import React from 'react';
import styled from 'styled-components';

const Pagination = () => {
  return (
    <React.Fragment>
      <PagesContainer>
        <PageNumbers>
          <li>Prev</li>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>Next</li>
        </PageNumbers>
      </PagesContainer>
    </React.Fragment>
  );
};

export default Pagination;

const PageNumbers = styled.ul``;
const PagesContainer = styled.section`
  background: lightgrey;
`;

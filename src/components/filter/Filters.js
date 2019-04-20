import React from 'react';
import styled from 'styled-components';

const Filters = () => {
  return (
    <React.Fragment>
      <FilterContainer>
        <h4>Filters</h4>
        <FilterLabel>
          <Filter name="neighbourhood">
            <option>Neighbourhood</option>
            <option>Philadelphia</option>
            <option>New York</option>
          </Filter>
          <Filter name="hometype">
            <option>Home Type</option>
            <option>Studio</option>
            <option>House</option>
            <option>Ranch</option>
          </Filter>
          <Filter name="bedrooms">
            <option>Bedrooms</option>
            <option>1 Bedroom</option>
            <option>2 Bedrooms</option>
            <option>3+ Bedrooms</option>
          </Filter>
        </FilterLabel>
      </FilterContainer>
    </React.Fragment>
  );
};

export default Filters;

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 0 auto;
  font-size: 1.6rem;
`;

const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
`;

const Filter = styled.select`
  border: 1px solid lightgrey;
  padding: 0.7rem;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2rem;
  appearance: none;
  cursor: pointer;
`;

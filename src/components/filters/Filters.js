import React from 'react';
import Location from './Location';
import Prices from './Prices';
import FloorSpace from './FloorSpace';
import Extras from './Extras';
import styled from 'styled-components';

const Filter = ({ ...filterProp }) => {
  console.log(filterProp);
  return (
    <StyledSection>
      <Location />
      <Prices
        minProp={filterProp.stateProp.minPrice}
        maxProp={filterProp.stateProp.maxPrice}
        inputProp={filterProp.inputChange}
      />
      <FloorSpace
        minFloor={filterProp.stateProp.minFloorSpace}
        maxFloor={filterProp.stateProp.maxFloorSpace}
      />
      <Extras />
    </StyledSection>
  );
};

export default Filter;

const StyledSection = styled.section`
  background: #f8f8f8;
`;

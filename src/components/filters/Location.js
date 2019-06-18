import React from 'react';
import styled from 'styled-components';

const Filters = ({ city, inputProp, bedroom, hometype }) => {
  return (
    <React.Fragment>
      <FilterContainer>
        <h3>Filters</h3>
        <FilterLabel>City</FilterLabel>
        <Select name="city" onChange={inputProp} value={city}>
          <option value="All">All</option>
          <option value="Miami">Miami</option>
          <option value="Philadelphia">Philadelphia</option>
          <option value="New York">New York</option>
        </Select>
        <FilterLabel>Hometype</FilterLabel>
        <Select name="hometype" onChange={inputProp} value={hometype}>
          <option value="All">All</option>
          <option value="Apartment">Apartment</option>
          <option value="Studio">Studio</option>
          <option value="House">House</option>
          <option value="Ranch">Ranch</option>
        </Select>
        <FilterLabel>Bedroom</FilterLabel>
        <Select name="bedroom" onChange={inputProp}>
          <option value="1">1+ Bedroom</option>
          <option value="2">2+ Bedrooms</option>
          <option value="3">3+ Bedrooms</option>
          <option value="4">4+ Bedrooms</option>
          <option value="5">5+ Bedrooms</option>
        </Select>
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

const Select = styled.select`
  border: 1px solid lightgrey;
  padding: 0.7rem;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2rem;
  appearance: none;
  cursor: pointer;
`;

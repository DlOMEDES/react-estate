import React from "react";
import styled from "styled-components";

const Filters = ({ neighbourhood, inputProp }) => {
  return (
    <React.Fragment>
      <FilterContainer>
        <h3>Filters</h3>
        <FilterLabel>
          <Select
            name="Neighbourhood"
            onChange={inputProp}
            value={neighbourhood}
          >
            <option value="Miami">Miami</option>
            <option value="Philadelphia">Philadelphia</option>
            <option value="New York">New York</option>
          </Select>
          <Select name="Hometype" onChange={inputProp}>
            <option>Apartment</option>
            <option>Studio</option>
            <option>House</option>
            <option>Ranch</option>
          </Select>
          <Select name="Bedrooms" onChange={inputProp}>
            <option>1 Bedroom</option>
            <option>2 Bedrooms</option>
            <option>3 Bedrooms</option>
          </Select>
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

const Select = styled.select`
  border: 1px solid lightgrey;
  padding: 0.7rem;
  font-size: 1.6rem;
  font-weight: 300;
  margin-bottom: 2rem;
  appearance: none;
  cursor: pointer;
`;

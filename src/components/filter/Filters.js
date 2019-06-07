import React from 'react';
import styled from 'styled-components';

class Filters extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FilterContainer>
          <h4>Filters</h4>
          <FilterLabel>
            <Select name="Neighbourhood" onChange={this.props.handleChange}>
              <option value="Neighbourhood">Neighbourhood</option>
              <option value="Philadelphia">Philadelphia</option>
              <option value="New York">New York</option>
            </Select>
            <Select name="hometype" onChange={this.props.handleChange}>
              <option>Home Type</option>
              <option>Studio</option>
              <option>House</option>
              <option>Ranch</option>
            </Select>
            <Select name="bedrooms" onChange={this.props.handleChange}>
              <option>Bedrooms</option>
              <option>1 Bedroom</option>
              <option>2 Bedrooms</option>
              <option>3+ Bedrooms</option>
            </Select>
          </FilterLabel>
        </FilterContainer>
      </React.Fragment>
    );
  }
}

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

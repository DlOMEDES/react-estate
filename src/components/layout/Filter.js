import React, { Component } from 'react';
import styled from 'styled-components';

export default class Filter extends Component {
  render() {
    return (
      <FilterWrapper>
        <h3>Filter Section</h3>
      </FilterWrapper>
    );
  }
}

const FilterWrapper = styled.div`
  background: salmon;
`;

import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/Colors';
import Filters from './Filters';
import Prices from './Prices';
import FloorSpace from './FloorSpace';
import Extras from './Extras';

export default class Filtering extends Component {
  render() {
    return (
      <FilteringContainer>
        <Wrapper>
          <Filters />
          <Prices />
          <FloorSpace />
          <Extras />
        </Wrapper>
      </FilteringContainer>
    );
  }
}

const Wrapper = styled.div`
  position: fixed;
`;

const FilteringContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background: ${Colors.lightGrey};
`;

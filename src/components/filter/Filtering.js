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
          <Filters handleChange={this.handleChange} />
          <Prices handleChange={this.handleChange} />
          <FloorSpace handleChange={this.handleChange} />
          <Extras handleChange={this.handleChange} />
        </Wrapper>
      </FilteringContainer>
    );
  }
}

const Wrapper = styled.div``;

const FilteringContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background: ${Colors.lightGrey};
`;

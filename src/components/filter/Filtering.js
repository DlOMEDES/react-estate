import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/Colors';
import Filters from './Filters';
import Prices from './Prices';
import FloorSpace from './FloorSpace';
import Extras from './Extras';

export default class Filtering extends Component {
  

  handleChange = this.handleChange.bind(this)

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

   this.setState({
     [name]:value
   }, () => console.log(this.state))
  }

  render() {
    return (
      <FilteringContainer>
        <Wrapper>
          <Filters handleChange={this.handleChange}/>
          <Prices />
          <FloorSpace />
          <Extras />
        </Wrapper>
      </FilteringContainer>
    );
  }
}

const Wrapper = styled.div`
  
`;

const FilteringContainer = styled.section`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  background: ${Colors.lightGrey};
`;

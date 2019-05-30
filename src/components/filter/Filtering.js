import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/Colors';
import Filters from './Filters';
import Prices from './Prices';
import FloorSpace from './FloorSpace';
import Extras from './Extras';

export default class Filtering extends Component {
  
  state = {
    minPrice: 0,
    maxPrice: 100000000,
    minFloorSpace: 0,
    maxFloorSpace: 9000,
    elevator: false,
    swimmingPool: false,
    finishedBasement: false,
    gym: false
  }
  
  handleChange = (event) => {
    let name = event.target.name;
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value;

   this.setState({
     [name]:value
   }, () => console.log(this.state))
  }

  render() {
    return (
      <FilteringContainer>
        <Wrapper >
          <Filters handleChange={this.handleChange}/>
          <Prices handleChange={this.handleChange} globalState={this.state}/>
          <FloorSpace handleChange={this.handleChange} globalState={this.state}/>
          <Extras handleChange={this.handleChange} globalState={this.state}/>
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

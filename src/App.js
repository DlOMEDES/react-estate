import React, { Component } from 'react';
import { GlobalStyle } from './utils/GLobals';
import Navbar from './components/nav/Navbar';
// import Filtering from './components/filter/Filtering';
import Listings from './components/listing/Listings';
import { Colors } from './utils/Colors';
import ContentSection from './components/layout/ContentSection';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faBed,
  faThList,
  faTh,
  faSquare,
  faMapMarkerAlt
} from '@fortawesome/free-solid-svg-icons';
import ListingData from './data/ListingData';
import styled from 'styled-components';
import Prices from './components/filter/Prices';
import FloorSpace from './components/filter/FloorSpace';
import Filters from './components/filter/Filters';
import Extras from './components/filter/Extras';

export default class App extends Component {
  state = {
    minPrice: 0,
    maxPrice: 100000000,
    minFloorSpace: 0,
    maxFloorSpace: 9000,
    elevator: false,
    swimmingPool: false,
    finishedBasement: false,
    gym: false,
    ListingData
  };

  handleChange = e => {
    const value = e.target.value;
    const name = e.target.name;
    this.setState(
      {
        name: value
      },
      () => console.log(this.state)
    );
    // console.log(name);
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
        <ContentSection>
          <FilterContainer>
            <Filters handleChange={this.handleChange} />
            <Prices handleChange={this.handleChange} />
            <FloorSpace handleChange={this.handleChange} />
            <Extras handleChange={this.handleChange} />
          </FilterContainer>
          <Listings ListingData={this.state.ListingData} />
        </ContentSection>
      </React.Fragment>
    );
  }
}
library.add(faBed, faThList, faTh, faSquare, faMapMarkerAlt);

const FilterContainer = styled.section`
  display: flex;
  flex-direction: column;
  background: ${Colors.lightGrey};
`;

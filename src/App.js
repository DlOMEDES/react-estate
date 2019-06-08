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
    maxPrice: 999999,
    minFloorSpace: 0,
    maxFloorSpace: null,
    elevator: false,
    swimmingPool: false,
    finishedBasement: false,
    gym: false,
    ListingData
  };

  inputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value
      },
      () => console.log(this.state)
    );
  };

  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
        <ContentSection>
          <FilterContainer>
            <Filters inputChange={this.inputChange} />
            <Prices inputChange={this.inputChange} globalState={this.state} />
            <FloorSpace inputChange={this.inputChange} />
            <Extras inputChange={this.inputChange} />
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

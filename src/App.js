import React, { Component } from 'react';
import { GlobalStyle } from './utils/GlobalStyle';
import Navbar from './components/nav/Navbar';
import Listings from './components/listing/Listings';
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
import Pagination from './components/layout/Pagination';
import Filters from './components/filters/Filters';

export default class App extends Component {
  state = {
    city: 'All',
    hometype: 'All',
    bedroom: '',
    minPrice: 0,
    maxPrice: 9999999,
    minFloorSpace: 0,
    maxFloorSpace: 999999,
    elevator: false,
    swimmingPool: false,
    finishedBasement: false,
    gym: false,
    ListingData
    // filterData: ListingData
  };

  inputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        console.log(this.state);
      }
    );
  };

  render() {
    let filteredData = this.state.ListingData.filter(item => {
      // SORT VIA CITY
      if (this.state.city !== 'All') {
        return item.city === this.state.city;
      }
      // SORT VIA HOMETYPE
      if (this.state.hometype !== 'All') {
        return item.hometype === this.state.hometype;
      }
      // SORT VIA BEDROOMS
      if (this.state.bedroom !== '') {
        return item.rooms >= this.state.bedroom;
      }

      return (
        item.price >= this.state.minPrice &&
        item.price <= this.state.maxPrice &&
        item.floorspace >= this.state.minFloorSpace &&
        item.floorspace <= this.state.maxFloorSpace
      );
    });
    return (
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
        <ContentSection>
          <Filters inputChange={this.inputChange} stateProp={this.state} />
          <Listings listingProp={filteredData} />
        </ContentSection>
        <Pagination />
      </React.Fragment>
    );
  }
}
library.add(faBed, faThList, faTh, faSquare, faMapMarkerAlt);

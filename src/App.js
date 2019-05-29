import React, { Component } from 'react';
import { GlobalStyle } from './utils/GLobals';
import Navbar from './components/nav/Navbar';
import Filtering from './components/filter/Filtering';
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

export default class App extends Component {


  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
        <ContentSection>
          <Filtering />
          <Listings />
        </ContentSection>
      </React.Fragment>
    );
  }
}
library.add(faBed, faThList, faTh, faSquare, faMapMarkerAlt);

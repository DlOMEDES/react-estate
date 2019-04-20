import React, { Component } from 'react';
import { GlobalStyle } from './utils/GLobals';
import Navbar from './components/nav/Navbar';
import Filtering from './components/filter/Filtering';
import Listings from './components/listing/Listings';
import ContentSection from './components/layout/ContentSection';

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

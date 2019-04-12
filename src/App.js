import React, { Component } from 'react';
import { GlobalStyle } from './utils/GLobals';
import Navbar from './components/nav/Navbar';
import Filter from './components/layout/Filter';
import Listings from './components/layout/Listings';
import ContentSection from './components/layout/ContentSection';

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
        <ContentSection>
          <Filter />
          <Listings />
        </ContentSection>
      </React.Fragment>
    );
  }
}

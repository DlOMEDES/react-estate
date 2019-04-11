import React, { Component } from 'react';
import { createGlobalStyle } from 'styled-components';
import Navbar from './components/nav/Navbar';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 62.5%;
  }

  body {
    @import url('https://fonts.googleapis.com/css?family=Nunito:300,400,700"');
    font-family: 'Nunito', sans-serif;
    margin: 0;
    padding: 0;
    font-size: 1.6rem;
  }

  ul, li, a {
    text-decoration: none;
    color: inherit;
  }
  `;

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
      </React.Fragment>
    );
  }
}

// export default App;

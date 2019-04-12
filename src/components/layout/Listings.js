import React, { Component } from 'react';
import styled from 'styled-components';

export default class Listings extends Component {
  render() {
    return (
      <ListingsWrapper>
        <h3>Listings Secion</h3>
      </ListingsWrapper>
    );
  }
}

const ListingsWrapper = styled.div`
  background: green;
`;

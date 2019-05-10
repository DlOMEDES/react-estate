import React from 'react';
import styled from 'styled-components';
import ResultItem from './ResultItem';
import ListingData from '../../data/ListingData';

class Results extends React.Component {
  state = {
    ListingData
  };

  render() {
    return (
      <React.Fragment>
        <ResultContainter>
          <ResultItem ListingData={this.state.ListingData} />
        </ResultContainter>
      </React.Fragment>
    );
  }
}

export default Results;

const ResultContainter = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

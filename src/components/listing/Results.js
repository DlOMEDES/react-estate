import React from 'react';
import styled from 'styled-components';
import ResultItem from './ResultItem';

class Results extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ResultContainter>
          <ResultItem />
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

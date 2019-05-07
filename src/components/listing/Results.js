import React from 'react';
import styled from 'styled-components';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { Colors } from '../../utils/Colors';
import ResultItem from './ResultItem';

const Results = () => {
  return (
    <React.Fragment>
      <ResultContainter>
        <ResultItem />
        <ResultItem />
        <ResultItem />
      </ResultContainter>
    </React.Fragment>
  );
};

export default Results;

const ResultContainter = styled.section`
  display: flex;
  justify-content: space-between;
`;

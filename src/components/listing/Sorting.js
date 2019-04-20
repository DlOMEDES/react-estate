import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Sorting = () => {
  return (
    <React.Fragment>
      <SortContainer>
        <p>420 Results Found</p>
        <SortOptions>
          <SelectSort>
            <option value="price-asc">Highest Price</option>
            <option value="price-dsc">Lowest Price</option>
          </SelectSort>
        </SortOptions>
        <View>
          <FontAwesomeIcon icon="th-list" color="black" size="lg" />
          <FontAwesomeIcon icon="th" color="black" size="lg" />
        </View>
      </SortContainer>
    </React.Fragment>
  );
};

export default Sorting;

const SortContainer = styled.section`
  background: palevioletred;
`;
const View = styled.div``;
const SortOptions = styled.div``;
const SelectSort = styled.select``;

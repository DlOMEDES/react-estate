import React from 'react';
import styled from 'styled-components';

const Prices = () => {
  return (
    <React.Fragment>
      <PriceContainer>
        <h4>Prices</h4>
        <PriceLabel htmlFor="Price">
          <input type="text" name="min-price" />
          <input type="text" name="max-price" />
        </PriceLabel>
      </PriceContainer>
    </React.Fragment>
  );
};
export default Prices;

const PriceContainer = styled.div`
  width: 20rem;
  margin: 0 auto;
`;

const PriceLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  input {
    width: 35%;
    padding: 0.7rem;
    font-size: 1.6rem;
  }
`;

import React from 'react';
import styled from 'styled-components';

const FloorSpace = () => {
  return (
    <React.Fragment>
      <FloorContainer>
        <h4>Floor Space</h4>
        <FloorLabel htmlFor="FloorSpace">
          <input type="text" name="min-space" />
          <input type="text" name="max-space" />
        </FloorLabel>
      </FloorContainer>
    </React.Fragment>
  );
};

export default FloorSpace;

const FloorContainer = styled.div`
  width: 20rem;
  margin: 0 auto;
`;

const FloorLabel = styled.label`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  input {
    width: 35%;
    padding: 0.7rem;
    font-size: 1.6rem;
  }
`;

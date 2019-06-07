import React from 'react';
import styled from 'styled-components';

class FloorSpace extends React.Component {
  render() {
    return (
      <React.Fragment>
        <FloorContainer>
          <h4>Floor Space</h4>
          <FloorLabel htmlFor="FloorSpace">
            <input type="text" name="minFloorSpace" />
            <input type="text" name="maxFloorSpace" />
          </FloorLabel>
        </FloorContainer>
      </React.Fragment>
    );
  }
}

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

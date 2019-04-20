import React from 'react';
import styled from 'styled-components';

const Extras = () => {
  return (
    <React.Fragment>
      <ExtraContainer>
        <ExtraLabel htmlFor="Elevator">
          <Title>Elevator</Title>
          <Checkbox name="extras" value="elevator" type="checkbox" />
        </ExtraLabel>
        <ExtraLabel htmlFor="swimming pool">
          <Title>Swimming Pool</Title>
          <Checkbox name="extras" value="swimming pool" type="checkbox" />
        </ExtraLabel>
        <ExtraLabel htmlFor="finished basement">
          <Title>Finished Basement</Title>
          <Checkbox name="extras" value="finished basement" type="checkbox" />
        </ExtraLabel>
        <ExtraLabel htmlFor="gym">
          <Title>Gym</Title>
          <Checkbox name="gym" value="gym" type="checkbox" />
        </ExtraLabel>
      </ExtraContainer>
    </React.Fragment>
  );
};

export default Extras;

const ExtraContainer = styled.section`
  display: flex;
  flex-direction: column;
  width: 20rem;
  margin: 2rem auto;
`;

const Title = styled.h4`
  margin: 0.5rem;
`;
const ExtraLabel = styled.label`
  display: flex;
  justify-content: space-between;
  /* margin-bottom: 1rem; */
`;

const Checkbox = styled.input`
  padding: 0.7rem;
`;

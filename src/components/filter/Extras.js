import React from 'react';
import styled from 'styled-components';

class Extras extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ExtraContainer>
          <ExtraLabel htmlFor="Elevator">
            <Title>Elevator</Title>
            <Checkbox name="elevator" type="checkbox" onChange={this.props.handleChange} />
          </ExtraLabel>
          <ExtraLabel htmlFor="swimmingPool">
            <Title>Swimming Pool</Title>
            <Checkbox name="swimmingPool" type="checkbox" onChange={this.props.handleChange} />
          </ExtraLabel>
          <ExtraLabel htmlFor="finishedBasement">
            <Title>Finished Basement</Title>
            <Checkbox name="finishedBasement" type="checkbox" onChange={this.props.handleChange} />
          </ExtraLabel>
          <ExtraLabel htmlFor="gym">
            <Title>Gym</Title>
            <Checkbox name="gym" type="checkbox" onChange={this.props.handleChange} />
          </ExtraLabel>
        </ExtraContainer>
      </React.Fragment>
    )
  }
}

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

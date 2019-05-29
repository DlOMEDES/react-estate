import React from 'react';
import styled from 'styled-components';

class Prices extends React.Component {

 
  render() {

    //  console.log(this.props.globalState);
    return (
      <React.Fragment>
      <PriceContainer>
        <h4>Prices</h4>
        <PriceLabel htmlFor="Price">
          <input type="text" name="minPrice" onChange={this.props.handleChange} value={this.props.globalState.minPrice}/>
          <input type="text" name="maxPrice" onChange={this.props.handleChange} value={this.props.globalState.maxPrice}/>
        </PriceLabel>
      </PriceContainer>
    </React.Fragment>
    )
  }
}

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

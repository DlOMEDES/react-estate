import React, { Component } from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/Colors';

export default class Navbar extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <Logo href="#">Logo</Logo>
          <Nav>
            <Navlinks href="#">Create Ads</Navlinks>
            <Navlinks href="#">About Us</Navlinks>
            <Navlinks href="#">Log in</Navlinks>
            <Navlinks href="#" className="registerBtn">
              Register
            </Navlinks>
          </Nav>
        </Header>
      </React.Fragment>
    );
  }
}

const Header = styled.header`
  display: flex;
  padding: 2rem 3rem;
  justify-content: space-between;
  align-items: center;
  background: ${Colors.blueBG};
  color: ${Colors.white};
`;

const Logo = styled.a`
  width: 50px;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  /* justify-content: space-around; */
`;

const Navlinks = styled.a`
  padding: 0 1rem;
  font-size: 1.5rem;

  &.registerBtn {
    background: ${Colors.ctaBrown};
    padding: 0.5rem 2rem;
    text-align: center;
    border-radius: 0.2rem;
    &:hover {
      background: ${Colors.highlight};
      color: ${Colors.white};
    }
  }

  &:hover {
    color: ${Colors.highlight};
  }
`;

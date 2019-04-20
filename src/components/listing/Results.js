import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Results = () => {
  return (
    <React.Fragment>
      <ResultContainter>
        <h3>Listing Results</h3>
        <List>
          <Img />
          <Address>Address</Address>
          <Details>
            <UserImg />
            <UserDetails>
              <Name />
              <DateSpan />
            </UserDetails>
          </Details>
          <ListDetails>
            <SquareFoot>
              <p>200ft&sup2;</p>
              <FontAwesomeIcon icon="bed" />;
            </SquareFoot>
          </ListDetails>
        </List>
      </ResultContainter>
    </React.Fragment>
  );
};

export default Results;

const List = styled.div``;
const Img = styled.img``;
const Address = styled.span``;
const Details = styled.div``;
const UserImg = styled.div``;
const UserDetails = styled.div``;
const Name = styled.span``;
const DateSpan = styled.span``;
const ListDetails = styled.div``;
const SquareFoot = styled.div``;
const ResultContainter = styled.section`
  background: coral;
`;

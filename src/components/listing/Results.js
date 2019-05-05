import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Results = () => {
  return (
    <React.Fragment>
      <ResultContainter>
        <List>
          <ListImage>
            {/* <Img src={first50} style={{ width: '333px' }} /> */}
            <Address>Address</Address>
            <Details>
              <UserImg />
              <UserDetails>
                <Name /> Mr anderson
                <DateSpan /> Posted on 05/19/19
              </UserDetails>
              <ListDetails>
                <SquareFoot>
                  <Space>
                    <p>200 ft&sup2;</p>
                  </Space>
                  <Bedrooms>
                    <FontAwesomeIcon icon="bed" />
                    <span>3 Bedrooms unit</span>
                  </Bedrooms>
                </SquareFoot>
              </ListDetails>
            </Details>
          </ListImage>
          <BottomInfo>
            <span>$100 / per month</span>
            <span>
              <FontAwesomeIcon icon="map-marker-alt" />
              Ridgewood, NY
            </span>
          </BottomInfo>
        </List>
      </ResultContainter>
    </React.Fragment>
  );
};

export default Results;

const BottomInfo = styled.div``;
const List = styled.div`
  /* background: green; */
  box-shadow: 0px 10px 50px -5px rgba(224, 224, 224, 1);
`;
const ListImage = styled.div``;
const Address = styled.span`
  /* background: darkgrey; */
`;
const Details = styled.div`
  /* background: pink; */
`;
const UserImg = styled.div`
  /* background: red; */
`;
const UserDetails = styled.div`
  /* background: orange; */
`;
const Name = styled.span`
  /* background: purple; */
`;
const DateSpan = styled.span`
  /* background: yellow; */
`;
const ListDetails = styled.div`
  /* background: blue; */
`;
const SquareFoot = styled.div`
  /* background: lime; */
`;
const Bedrooms = styled.div`
  /* background: brown; */
`;
const Space = styled.div`
  /* background: #2570f5; */
`;
const ResultContainter = styled.section`
  background: coral;
`;

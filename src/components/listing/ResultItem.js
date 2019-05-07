import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ResultItem = () => {
  return (
    <React.Fragment>
      <List>
        <ListImage>
          <Address>Address</Address>
          <Details>
            <UserImg />
            <UserDetails>
              <Name>Mr anderson</Name>
              <PostDate>Posted on 05/19/19</PostDate>
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
    </React.Fragment>
  );
};
export default ResultItem;

const BottomInfo = styled.div``;

const List = styled.div`
  width: 32%;
  border-radius: 0.5rem;
  margin-bottom: 6rem;
  box-shadow: 0px 10px 55px -5px rgba(224, 224, 224, 1);
`;

const ListImage = styled.div`
  color: ${Colors.white};
  font-weight: 700;
  padding: 1.5rem;
  position: relative;
  height: 20rem;
  background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url('https://odis.homeaway.com/odis/listing/2f98571f-2ade-4f9f-b91d-4c8f78a233e2.c10.jpg');
  background-size: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;
`;

const Address = styled.span`
  /* background: darkgrey; */
`;

const Details = styled.div`
  background: linear-gradient(
    90deg,
    rgba(63, 70, 84, 0.8) 0%,
    rgba(158, 141, 62, 0.8) 93%
  );
  position: absolute;
  padding: 2rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;

const UserImg = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: 1px solid ${Colors.white};
  display: inline-block;
`;
const UserDetails = styled.div`
  display: inline-block;
  vertical-align: top;
  margin-left: 2rem;
  margin-top: 0.3rem;
`;
const Name = styled.span`
  display: block;
  color: rgb(255, 255, 255, 1);
`;
const PostDate = styled.span`
  display: block;
  color: rgb(255, 255, 255, 0.7);
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

  p {
    margin: 0;
  }
`;

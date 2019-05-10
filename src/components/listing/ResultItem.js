import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../utils/Colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ListingData from '../../data/ListingData';

const ResultItem = () => {
  return (
    <React.Fragment>
      {ListingData.map((listing, index) => (
        <List key={index}>
          <ListImage style={{ backgroundImage: `url('${listing.image}')` }}>
            <Address>{listing.address}</Address>
            <Details>
              <UserDetails>
                <UserImg />
                <UserInfo>
                  <Name>President Trump</Name>
                  <PostDate>Posted on 05/19/19</PostDate>
                </UserInfo>
              </UserDetails>
              <ListDetails>
                <Space>
                  <p>200 ft&sup2;</p>
                </Space>
                <Bedrooms>
                  <FontAwesomeIcon icon="bed" />
                  <span>{listing.rooms}</span>
                </Bedrooms>
                <ViewButton>View Listing</ViewButton>
              </ListDetails>
            </Details>
          </ListImage>
          <BottomInfo>
            <Pricing>{listing.price}</Pricing>
            <Location>
              <FontAwesomeIcon icon="map-marker-alt" size="lg" />
              <p>
                {listing.city}, {listing.state}
              </p>
            </Location>
          </BottomInfo>
        </List>
      ))}
    </React.Fragment>
  );
};
export default ResultItem;

const List = styled.div`
  width: 32%;
  border-radius: 0.5rem;
  margin-bottom: 6rem;
  box-shadow: 10px 10px 10px 0px rgb(224, 224, 224);
`;

const Address = styled.span`
  position: absolute;
  bottom: 0;
  margin-bottom: 3rem;
`;

const ListImage = styled.div`
  color: ${Colors.white};
  font-weight: 700;
  padding: 1.5rem;
  position: relative;
  height: 18rem;
  /* background-image: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.6)),
    url('https://odis.homeaway.com/odis/listing/2f98571f-2ade-4f9f-b91d-4c8f78a233e2.c10.jpg'); */
  background-image: url('${ListingData.image}');
  background-size: cover;
  border-top-left-radius: 0.5rem;
  border-top-right-radius: 0.5rem;

  &:hover {
    ${Address} {
      opacity: 0;
      transition: 0.5s ease-in-out;
    }
  }
`;

const Details = styled.div`
  opacity: 0;
  border-radius: 0.5rem;
  background: linear-gradient(
    180deg,
    rgba(228, 188, 0, 0.5) 0%,
    rgba(67, 118, 221, 0.7) 100%
  );
  position: absolute;
  padding: 2rem;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition: all 0.5s ease-in-out;
  &:hover {
    opacity: 1;
  }
`;

const UserDetails = styled.div`
  display: flex;
`;
const UserImg = styled.div`
  height: 5rem;
  width: 5rem;
  border-radius: 50%;
  border: 1px solid ${Colors.white};
  display: inline-block;
  background-image: url('https://www.telegraph.co.uk/content/dam/news/2017/11/22/TELEMMGLPICT000147365976_trans_NvBQzQNjv4Bq3XmyF3YIL3K1caQxZsZv2Ssm-UOV8_Q90I8_c5Af0yY.jpeg?imwidth=450');
  background-size: cover;
`;
const UserInfo = styled.div`
  margin-left: 2rem;
`;

const ListDetails = styled.div`
  width: 20rem;
  margin: 2rem 7.2rem;
`;
const Name = styled.span`
  display: block;
  color: rgb(255, 255, 255, 1);
  font-weight: 300;
  margin-bottom: 0.5rem;
`;
const PostDate = styled.span`
  display: block;
  color: rgb(255, 255, 255, 0.7);
  font-size: 1.2rem;
`;

const Space = styled.div`
  margin-bottom: 0.5rem;

  p {
    margin: 0;
  }
`;
const Bedrooms = styled.div`
  /* background: brown; */
  span {
    margin-left: 0.5rem;
  }
`;
const ViewButton = styled.button`
  margin-top: 1rem;
  background: ${Colors.black};
  border: none;
  color: ${Colors.white};
  padding: 1rem 2rem;
  font-weight: 700;
  cursor: pointer;
  transition: 0.2s ease-in-out;
  &:hover {
    background: ${Colors.golden};
  }
`;

const Pricing = styled.span`
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;
const Location = styled.span`
  display: flex;
  font-size: 1.8rem;
  color: ${Colors.greysBlue};
  align-items: center;
  p {
    margin: 0 1rem;
  }
`;

const BottomInfo = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
`;

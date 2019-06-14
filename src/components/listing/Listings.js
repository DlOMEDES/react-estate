import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Sorting from './Sorting';
import ListingItem from './ListingItem';

class Listings extends React.Component {
  render() {
    const { listingProp } = this.props;

    // if (listingProp === undefined || listingProp.length === 0) {
    //   return `Filter doesn't match any listings`;
    // }

    const listingsItem = listingProp.map((item, id) => {
      return (
        <ListingItem
          key={id}
          address={item.address}
          image={item.image}
          city={item.city}
          state={item.state}
          rooms={item.rooms}
          price={item.price}
          floorspace={item.floorspace}
          extras={['elevator', 'gym']}
          hometype={item.home}
        />
      );
    });
    return (
      <React.Fragment>
        <ListingsWrapper>
          <SearchBar />
          <Sorting />
          <ItemsContainer>{listingsItem}</ItemsContainer>
        </ListingsWrapper>
      </React.Fragment>
    );
  }
}

export default Listings;

const ListingsWrapper = styled.section`
  padding: 1.5rem 3rem;
`;
const ItemsContainer = styled.section`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

import React from 'react';
import styled from 'styled-components';
import SearchBar from './SearchBar';
import Sorting from './Sorting';
import ListingItem from './ListingItem';
import Pagination from './Pagination';
// import { Colors } from '../../utils/Colors';
// import person from '../../data/person'

const Listings =({ListingData})=> {
  let ListingItems = ListingData.map((item, id) => {
    
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
    )
  });

  
  return (
    <ListingsWrapper>
      <SearchBar />
      <Sorting />
      <ItemsContainer>
          {ListingItems}
      </ItemsContainer>
      <Pagination />
    </ListingsWrapper>
  );
 
}

export default Listings;

const ListingsWrapper = styled.section`
  padding: 1.5rem 3rem;
`;
const ItemsContainer = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
`

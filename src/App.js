import React, { Component } from "react";
import { GlobalStyle } from "./utils/GlobalStyle";
import Navbar from "./components/nav/Navbar";
import Listings from "./components/listing/Listings";
import ContentSection from "./components/layout/ContentSection";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBed,
  faThList,
  faTh,
  faSquare,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import ListingData from "./data/ListingData";
import Pagination from "./components/layout/Pagination";
import Filters from "./components/filters/Filters";

export default class App extends Component {
  state = {
    neighbourhood: "Neighbourhood",
    homeType: "Studio",
    bedrooms: 1,
    minPrice: 0,
    maxPrice: 9999999,
    minFloorSpace: 0,
    maxFloorSpace: 999999,
    elevator: false,
    swimmingPool: false,
    finishedBasement: false,
    gym: false,
    ListingData
    // filterData: ListingData
  };

  inputChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.type === "checkbox" ? target.checked : target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        // this.filterData();
        console.log(this.state);
      }
    );
  };

  // filterData = () => {
  //   const newData = this.state.ListingData.filter(item => {
  //     return item.price >= this.state.minPrice;
  //   });
  //   console.log(this.state);
  //   this.setState({
  //     filteredData: newData
  //   });
  // };

  render() {
    let filteredData = this.state.ListingData.filter(item => {
      return (
        item.price >= this.state.minPrice &&
        item.price <= this.state.maxPrice &&
        item.floorspace >= this.state.minFloorSpace &&
        item.floorspace <= this.state.maxFloorSpace
      );
    });
    return (
      <React.Fragment>
        <GlobalStyle />
        <Navbar />
        <ContentSection>
          <Filters inputChange={this.inputChange} stateProp={this.state} />
          <Listings listingProp={filteredData} />
        </ContentSection>
        <Pagination />
      </React.Fragment>
    );
  }
}
library.add(faBed, faThList, faTh, faSquare, faMapMarkerAlt);

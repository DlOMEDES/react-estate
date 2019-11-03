import React, { Component } from "react";
import { GlobalStyle } from "../utils/GlobalStyle";
import Navbar from "./nav/Navbar";
import Listings from "./listing/Listings";
import ContentSection from "./layout/ContentSection";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faBed,
  faThList,
  faTh,
  faSquare,
  faMapMarkerAlt
} from "@fortawesome/free-solid-svg-icons";
import ListingData from "../data/ListingData";
import Pagination from "./layout/Pagination";
import Filters from "./filters/Filters";

export default class App extends Component {
  state = {
    ListingData,
    city: "",
    hometype: "",
    bedroom: "",
    minPrice: 0,
    maxPrice: 9999999,
    minFloorSpace: 0,
    maxFloorSpace: 999999,
    elevator: false,
    swimmingPool: false,
    finishedBasement: false,
    gym: false
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
        console.log(this.state);
      }
    );
  };

  render() {
    let filteredData = this.state.ListingData.filter(item => {
      // SORT BY CITY
      if (this.state.city !== "") {
        return item.city === this.state.city;
      }
      // SORT BY HOMETYPE
      if (this.state.hometype !== "") {
        return item.hometype === this.state.hometype;
      }
      // SORT BY BEDROOMS
      if (this.state.bedroom !== "") {
        return item.rooms >= this.state.bedroom;
      }

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
          <Listings filteredData={filteredData} />
        </ContentSection>
        <Pagination />
      </React.Fragment>
    );
  }
}
library.add(faBed, faThList, faTh, faSquare, faMapMarkerAlt);

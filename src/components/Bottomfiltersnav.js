import React from "react";
import "../css/Bottomfiltersnav/index.css";
import filterIcon from "../assets/filter_icon.png";
import sortIcon from "../assets/sort_icon.png";
const Bottomfiltersnav = ({children}) => {
  return (
    <section className="bottomnav">
      <section className="filtersdiv">
      {children}
      </section>
      <section className="bottomnav__left">
        <img src={sortIcon} alt="sort icon"></img>
        <p>Sort</p>
      </section>
      <section className="bottomnav__right">
        <img src={filterIcon} alt="filter icon"></img>
        sec
        <p>Filters</p>
      </section>
    </section>
  );
};

export default Bottomfiltersnav;

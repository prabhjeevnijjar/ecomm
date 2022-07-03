import React from "react";
import "../css/Displayarea/index.css";
import dogimage from "../assets/doggie.png";
const Displayarea = () => {
  return (
    <section className="mainarea">
      <section className="mainarea__left">left</section>
      <section className="mainarea__right">
        <section className="mainarea__right__top">
          <section className="mainarea__right__top__heading">
            <h2>DOGS FOOD</h2>
          </section>
          <section className="mainarea__right__top__filter">
            <label>Sort By</label>
            <select name="cars" id="cars">
              <option value="none">None</option>
              <option value="price">Price</option>
            </select>
          </section>
        </section>
        <section className="mainarea__right__bottom">
          {" "}
          <img src={dogimage} alt="showcase image of dog product"></img>{" "}
        </section>
      </section>
    </section>
  );
};

export default Displayarea;

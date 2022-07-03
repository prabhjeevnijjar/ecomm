import React from "react";
import "../css/Productscardarea/index.css";
import Productcard from "./Productcard";
const Productscardarea = () => {
  //pass props for all cards here
  return (
    <section className="cardsarea">
      <Productcard />
      <Productcard />
      <Productcard />
      <Productcard />
    </section>
  );
};
export default Productscardarea;

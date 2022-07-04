import React, { useEffect, useState } from "react";
import "../css/Productscardarea/index.css";
import Productcard from "./Productcard";
import dogFoodData from "../data/dogFoodData";
const Productscardarea = ({filteredBrandsArr}) => {

useEffect(()=>{
  console.log("PRODUCT AREA",filteredBrandsArr);
},[filteredBrandsArr])
  return (
    <section className="cardsarea">
      {dogFoodData.map((item, i) => {
        // console.log("item ",i," ",itxem)
        return <Productcard props={item} />;
      })}
    </section>
  );
};
export default Productscardarea;

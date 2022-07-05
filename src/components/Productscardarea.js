import React, { useEffect, useState } from "react";
import "../css/Productscardarea/index.css";
import Productcard from "./Productcard";
import dogFoodData from "../data/dogFoodData";
const Productscardarea = ({
  filteredBrandsArr,
  filteredBlsArr,
  filteredBreedsArr,
  filteredTofArr,
}) => {
  const [breedFilteredResults, setBreedFilteredResults] = useState(dogFoodData);

  useEffect(() => {
    // selected filters arrive in these arrays
    let brandFilterValues = filteredBrandsArr;
    let BlsFilterValues = filteredBlsArr;
    let BreedsFilterValues = filteredBreedsArr;
    let TofFilterValues = filteredTofArr;

    // convert array to object value then check each obj with dogFoodData
    // console.log(brandFilterValues);
    // console.log({...brandFilterValues});
    // brandFilterValues.map((value, index) => {
    //   if (dogFoodData.includes(value)) {
    //   }
    // });

    setBreedFilteredResults(
      dogFoodData.filter((item) =>
        BreedsFilterValues.every((val) => item.breed.indexOf(val) > -1)
      )
    );
    // console.log("filtered breed data", breedFilteredResults);
  }, [filteredBrandsArr, filteredBlsArr, filteredBreedsArr, filteredTofArr]);
  return (
    <section className="cardsarea">
      {breedFilteredResults.map((item, i) => {
        // console.log("item ",i," ",itxem)
        return <Productcard props={item} />;
      })}
    </section>
  );
};
export default Productscardarea;

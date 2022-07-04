import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import "../css/Filtersdropdownarea/index.css";
import {
  dogFoodVegNonVegType,
  dogFoodBrands,
  dogBreedLifeStage,
  dogBreeds,
} from "../constants/filters";

const Filtersdropdownarea = ({filteredBrandsArr,
  setFilteredBrandsArr,
  filteredBlsArr,
  setFilteredBlsArr}) => {
  const [checkedBrandsState, setCheckedBrandsState] = useState(
    new Array(dogFoodBrands.length).fill(false)
  );

  const [checkedBlsState, setCheckedBlsState] = useState(
    new Array(dogBreedLifeStage.length).fill(false)
  );

  const [checkedBreedsState, setCheckedBreedsState] = useState(
    new Array(dogBreeds.length).fill(false)
  );

  const [checkedTofState, setCheckedTofState] = useState(
    new Array(dogFoodVegNonVegType.length).fill(false)
  );


 

  const [searchParams, setSearchParams] = useSearchParams();

  // BRANDS //
  const handleBrandsOnChange = (position) => {
    const updatedCheckedBrandState = checkedBrandsState.map((item, index) =>
      index === position ? !item : item
    );
    setCheckedBrandsState(updatedCheckedBrandState);
    console.log("ais", checkedBrandsState);
  };

  // BREED LIFESTYLE AGE (Bls)//
  const handleBlsOnChange = (position) => {
    setCheckedBlsState(
      checkedBlsState.map((item, index) => (index === position ? !item : item))
    );
    console.log("Bls", checkedBlsState);
  };

  // BREEDS //
  const handleBreedsOnChange = (position) => {
    setCheckedBreedsState(
      checkedBreedsState.map((item, index) =>
        index === position ? !item : item
      )
    );
    console.log("Bls", checkedBreedsState);
  };

  // TYPE OF FOOD (Tof)//
  const handleTofOnChange = (position) => {
    setCheckedTofState(
      checkedTofState.map((item, index) => (index === position ? !item : item))
    );
    console.log("Tof", checkedTofState);
  };

  // ON CLICK APPLY FILTERS
  // create a object containing key value pairs of filters with true value in its array
  const handleApplyFiltersOnClick = () => {
    //find in checkedBrandsState array true positions
    let filteredBrandsValues = [];
    for (let i = 0; i < checkedBrandsState.length; i++) {
      if (checkedBrandsState[i] === true) {
        filteredBrandsValues.push(dogFoodBrands[i]);
      }
    }
    if (filteredBrandsValues.length > 0) {
      setFilteredBrandsArr(filteredBrandsValues);
    }
    // BLS //
    let filteredBlsValues = [];
    for (let i = 0; i < checkedBlsState.length; i++) {
      if (checkedBlsState[i] === true) {
        filteredBlsValues.push(dogBreedLifeStage[i]);
      }
    }
    if (filteredBlsValues.length > 0) {
      setFilteredBlsArr(filteredBlsValues);
    }

    let qString = filteredBrandsValues.join(",");
    let qString2 = filteredBlsValues.join(",");
    
    setSearchParams({ brands: qString, bls: qString2 });
  };

  useEffect(() => {
   for(let entry of searchParams.entries()){
    console.log("USE EFFECT",entry);
    console.log("Section",entry[0])
    let val = entry[1].split(',')
    console.log("Values",val);
   }
  }, []);

  return (
    <section className="filtersarea">
      <section className="filtersarea_brands">
        <section className="filtersarea_brands heading ">
          <h4>Brands</h4>
          <button onClick={handleApplyFiltersOnClick}>Test</button>
          <ul className="filtersarea_list">
            {dogFoodBrands.map((name, index) => {
              return (
                <li key={index}>
                  <div className="filtersarea_list-item">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedBrandsState[index]}
                      onChange={() => handleBrandsOnChange(index)}
                    ></input>
                    <label key={index}>{name}</label>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="filtersarea_brands_filters"></section>
      </section>
      <section className="filtersarea_breedlifestage">
        <section className="filtersarea_breedlifestage heading">
          <h4>Breed Lifestyle Age</h4>
          <ul className="filtersarea_list">
            {dogBreedLifeStage.map((name, index) => {
              return (
                <li key={index}>
                  <div className="filtersarea_list-item">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedBlsState[index]}
                      onChange={() => handleBlsOnChange(index)}
                    ></input>
                    <label key={index}>{name}</label>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="filtersarea_breedlifestage_filters"></section>
      </section>
      <section className="filtersarea_breeds">
        <section className="filtersarea_breeds heading">
          <h4>Breeds</h4>
          <ul className="filtersarea_list">
            {dogBreeds.map((name, index) => {
              return (
                <li key={index}>
                  <div className="filtersarea_list-item">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedBreedsState[index]}
                      onChange={() => handleBreedsOnChange(index)}
                    ></input>
                    <label key={index}>{name}</label>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="filtersarea_breeds_filters"></section>
      </section>
      <section className="filtersarea_foodtype">
        <section className="filtersarea_foodtype heading">
          <h4>Food Type</h4>
          <ul className="filtersarea_list">
            {dogFoodVegNonVegType.map((name, index) => {
              return (
                <li key={index}>
                  <div className="filtersarea_list-item">
                    <input
                      type="checkbox"
                      id={`custom-checkbox-${index}`}
                      name={name}
                      value={name}
                      checked={checkedTofState[index]}
                      onChange={() => handleTofOnChange(index)}
                    ></input>
                    <label key={index}>{name}</label>
                  </div>
                </li>
              );
            })}
          </ul>
        </section>
        <section className="filtersarea_foodtype_filters"></section>
      </section>
    </section>
  );
};

export default Filtersdropdownarea;

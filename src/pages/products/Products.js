import React, { useState, useEffect } from "react";
import Bottomfiltersnav from "../../components/Bottomfiltersnav";
import Displayarea from "../../components/Displayarea";
import Filtersdropdownarea from "../../components/Filtersdropdownarea";
import Productscardarea from "../../components/Productscardarea";
import TopNav from "../../components/TopNav";

const Products = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1025);
  const [filteredBrandsArr, setFilteredBrandsArr] = useState([]);
  const [filteredBlsArr, setFilteredBlsArr] = useState([]);
  const [filteredBreedsArr, setFilteredBreedsArr] = useState([]);
  const [filteredTofArr, setFilteredTofArr] = useState([]);

  const updateMedia = () => {
    setDesktop(window.innerWidth > 1025);
  };

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  return (
    <div>
      <TopNav />
      <Displayarea />
      <Bottomfiltersnav>
        <Filtersdropdownarea
          filteredBrandsArr={filteredBrandsArr}
          setFilteredBrandsArr={setFilteredBrandsArr}
          filteredBlsArr={filteredBlsArr}
          setFilteredBlsArr={setFilteredBlsArr}
          filteredBreedsArr={filteredBreedsArr}
          setFilteredBreedsArr={setFilteredBreedsArr}
          filteredTofArr={filteredTofArr}
          setFilteredTofArr={setFilteredTofArr}
        />
      </Bottomfiltersnav>
      {isDesktop ? (
        <section>
          <Productscardarea
            filteredBrandsArr={filteredBrandsArr}
            filteredBlsArr={filteredBlsArr}
            filteredBreedsArr={filteredBreedsArr}
            filteredTofArr={filteredTofArr}
          />{" "}
          <Filtersdropdownarea
            filteredBrandsArr={filteredBrandsArr}
            setFilteredBrandsArr={setFilteredBrandsArr}
            filteredBlsArr={filteredBlsArr}
            setFilteredBlsArr={setFilteredBlsArr}
            filteredBreedsArr={filteredBreedsArr}
            setFilteredBreedsArr={setFilteredBreedsArr}
            filteredTofArr={filteredTofArr}
            setFilteredTofArr={setFilteredTofArr}
          />
        </section>
      ) : (
        <Productscardarea
          filteredBrandsArr={filteredBrandsArr}
          filteredBlsArr={filteredBlsArr}
          filteredBreedsArr={filteredBreedsArr}
          filteredTofArr={filteredTofArr}
        />
      )}
    </div>
  );
};
export default Products;

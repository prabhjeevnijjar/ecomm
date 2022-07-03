import React, { useState, useEffect } from "react";
import Bottomfiltersnav from "../../components/Bottomfiltersnav";
import Displayarea from "../../components/Displayarea";
import Filtersdropdownarea from "../../components/Filtersdropdownarea";
import Productscardarea from "../../components/Productscardarea";
import TopNav from "../../components/TopNav";

const Products = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 1025);

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
      <Bottomfiltersnav />
      {isDesktop ? (
        <section>
          <Productscardarea /> <Filtersdropdownarea />
        </section>
      ) : (
        <Productscardarea />
      )}
      {/* // <Itemscardarea /> */}
      {/* <Filtersdropdownarea /> */}
      {/*  a bit of difficulty in deciding either to align them
      side by side using new component or make a section here and add flex
      because in mobile screen I will be hiding the left filter part any whay */}
    </div>
  );
};
export default Products;

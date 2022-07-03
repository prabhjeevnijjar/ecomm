import React from "react";
import "../css/Productcard/index.css";
const Productcard = () => {
  //pass props for all cards here
  return (
    <section className="individualcard">
      <section className="individualcard__padding">
        <section className="individualcard__img">
          <img src="https://cdn.shopify.com/s/files/1/0086/0795/7054/products/AcanaLargeBreedAdultDryDogFood_510x@2x.jpg?v=1637579082"></img>
        </section>
        <section className="individualcard__name">
          <p>This is product description for product lorem ipsum lorem ipsim</p>
        </section>
        <section className="individualcard__price">
          <p>
            <b>₹800</b>
          </p>
        </section>
      </section>

      <section className="individualcard__actions">
        <section className="individualcard__actions_fav"></section>
        <section className="individualcard__actions_atc"></section>
      </section>
    </section>
  );
};
export default Productcard;

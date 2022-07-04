import React from "react";
import "../css/Productcard/index.css";
import cartIcon from "../assets/cart_icon.png";
import favIcon from "../assets/fav_icon.png";
const Productcard = (props) => {
  //pass props for all cards here
  console.log("product card", props.props.brand);
  return (
    <section className="individualcard">
      <section className="individualcard__padding">
        <section className="individualcard__img">
          <img src={props.props.productImage}></img>
        </section>
        <section className="individualcard__name">
          <p>{props.props.productName}</p>
        </section>
        <section className="individualcard__price">
          <p>
            <b>₹{props.props.price}</b>
          </p>
        </section>
      </section>

      <section className="individualcard__actions">
        <section className="individualcard__actions_fav">
          <img src={favIcon}></img>
        </section>
        <section className="individualcard__actions_atc">
          <img src={cartIcon}></img>
          <p>Add to cart</p>
        </section>
      </section>
    </section>
  );
};
export default Productcard;

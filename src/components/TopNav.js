import React from "react";
import { Link } from "react-router-dom";
import "../css/TopNav/index.css";
const TopNav = () => {
  return (
    <div className="nav">
      <ul className="nav__items">
        <li className="nav__item">
          <Link to="/">
            <a> Home</a>
          </Link>
        </li>
        {/* <span className="nav__items__slash">/</span> */}
        <li className="nav__item">
          <Link to="/">
            <a>Dogs</a>
          </Link>
        </li>
        {/* <span className="nav__items__slash">/</span> */}
        <li className="nav__item">
          <Link to="/products">
            <a> Food</a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TopNav;

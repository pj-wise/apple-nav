import React from "react";
import { NavLink } from "react-router-dom";
import AppleData from "../data";
function Nav(props) {
  console.log(props);
  return (
    <nav className="Nav">
      <NavLink className="link">Support</NavLink>
    </nav>
  );
}

export default Nav;

import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AppleData } from "../data";

function Nav() {
  console.log(AppleData);
  return (
    <nav className="Nav">
      {AppleData.map((data, i) => {
        return (
          <NavLink className="link" key={i}>
            {AppleData[i].mainLink}
          </NavLink>
        );
      })}
      <NavLink className="link">Support</NavLink>
    </nav>
  );
}

export default Nav;

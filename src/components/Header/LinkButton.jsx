import React from "react";
import { NavLink } from "react-router-dom";
function LinkButton({ text, route }) {
  return (
    <NavLink
      to={route}
      className={`hover:bg-white 
          hover:text-gray-800 
          hover:cursor-pointer
          rounded-xl transition-all duration-300 py-1 px-1 mx-1`}
    >
      {text}
    </NavLink>
  );
}

export default LinkButton;

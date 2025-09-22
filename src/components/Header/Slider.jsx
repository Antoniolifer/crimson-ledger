import React from "react";
import UserAuth from "./UserAuth";

function Slider({ isClosing }) {
  console.log("rendered slider");

  return (
    <div
      className={`z-30 w-1/3 h-full bg-gray-600 fixed ${
        isClosing ? "animate-toright" : "animate-fromright"
      } right-0 top-0 shadow-2xl shadow-red-400/75 flex flex-row`}
    >
      <div id="sidebar" className="w-2 h-full bg-red-700" />
      <div className="w-full flex justify-center">
        <UserAuth />
      </div>
    </div>
  );
}

export default Slider;

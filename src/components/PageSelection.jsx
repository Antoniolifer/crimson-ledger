import React from "react";
import LinkButton from "./LinkButton";
function PageSelection() {
  return (
    <div className="mx-1 ">
      <LinkButton text="Home" route={"/"} />
      <LinkButton text="Games" route={"/games"} />
      <LinkButton text="Reviews" route={"/reviews"} />
      <LinkButton text="About Us" route={"/about"} />
      <LinkButton text="Your Profile" route={"/profile"} />
      <LinkButton text="Bears" route={"/bears"} />
    </div>
  );
}

export default PageSelection;

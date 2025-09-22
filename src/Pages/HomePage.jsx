import React from "react";
import Reviews from "../components/Reviews";
import Users from "../components/Users";
import Games from "../components/Games";

function HomePage() {
  console.log("rendered homepage.");

  return (
    <>
      <div className="w-4/5 m-auto">
        <Users />
        <Reviews />
        <Games />
      </div>
    </>
  );
}

export default HomePage;

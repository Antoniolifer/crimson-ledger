import React from "react";
import SliderControl from "./SliderControl";
import useReviewStore from "../globalStore/reviewStore";
import PageSelection from "./PageSelection";
function Header() {
  console.log("rendered header.");

  const currentUser = useReviewStore((state) => state.currentUser);
  return (
    <div className="bg-gray-700 w-full sticky mb-2 h-12 top-0 flex flex-row items-center justify-between">
      <PageSelection />
      <h1 className="text-white basis-1/5 self-center font-epunda text-2xl underline underline-offset-2 mx-2">
        Review Knight
      </h1>
      {!currentUser && <SliderControl />}
      {currentUser && (
        <h1
          className={`hover:bg-white 
          hover:text-gray-800 
          hover:cursor-pointer
          rounded-xl transition-all duration-300 py-1 px-2 mx-2`}
        >
          {currentUser.username}
        </h1>
      )}
    </div>
  );
}

export default Header;

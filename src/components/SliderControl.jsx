import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import Slider from "../components/Slider";
import useReviewStore from "../globalStore/reviewStore";
import LinkButton from "./LinkButton";

function SliderControl() {
  console.log("rendered slider control");

  // const [sliderOpen, setSliderOpen] = useState(false);
  const sliderOpenStatus = useReviewStore((state) => state.sliderOpenStatus);
  const setSliderOpenStatus = useReviewStore(
    (state) => state.setSliderOpenStatus
  );
  const [isClosing, setIsClosing] = useState(false);

  const openSlider = () => {
    setSliderOpenStatus(true);
    document.body.classList.toggle("noscroll", true);
  };
  const closeSlider = () => {
    setIsClosing(true);
  };
  useEffect(() => {
    document.body.classList.toggle("noscroll", false);

    if (isClosing) {
      setTimeout(() => {
        setSliderOpenStatus(false);
        setIsClosing(false);
      }, 700);
    }
  }, [isClosing, setSliderOpenStatus]);
  return (
    <div>
      <div className="basis-2/5 grow">
        <button
          onClick={openSlider}
          className={`hover:bg-white 
          hover:text-gray-800 
          hover:cursor-pointer
          rounded-xl transition-all duration-300 py-1 px-1 mx-1`}
        >
          Sign in/Register
        </button>
      </div>

      {sliderOpenStatus &&
        createPortal(
          <div>
            <Slider isClosing={isClosing} />
            <div
              id="dim-cover"
              className={`bg-black/50 fixed ${
                isClosing ? "animate-fadeout" : "animate-fadein"
              } z-10 w-full h-full  inset-0`}
              onClick={closeSlider}
            />
          </div>,
          document.body
        )}
    </div>
  );
}

export default SliderControl;

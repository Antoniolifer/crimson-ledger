import React from "react";
import useBearStore from "../globalStore/bearStore";

function BearPage() {
  return (
    <div>
      <BearCounter />
      <BearControl />
      <BearDisplay />
    </div>
  );
}

function BearCounter() {
  const bears = useBearStore((state) => state.bears);

  return (
    <h1 className="my-1">
      Seemingly{" "}
      <span className="underline underline-offset-4">
        {bears.length} {bears.length === 1 ? "bear" : "bears"}
      </span>
      {bears.length === 1 ? " is" : " are"} in the area...
    </h1>
  );
}

function BearControl() {
  const increasePopulation = useBearStore((state) => state.increasePopulation);

  const handleClick = () => {
    increasePopulation();
  };
  return (
    <button
      onClick={handleClick}
      className="bg-gray-600 border-2 border-transparent cursor-pointer underline underline-offset-2 px-2 py-1 rounded-xl hover:bg-gray-200 hover:border-black hover:text-black hover:scale-110 transition-all duration-300"
    >
      Add a bear
    </button>
  );
}

function BearDisplay() {
  const height = window.innerHeight;
  const width = window.innerWidth;
  const bears = useBearStore((state) => state.bears);

  return (
    <div>
      {bears.map((bear, index) => {
        return (
          <div
            className="absolute w-12 h-12"
            style={{
              top: Math.min(height - 72, bear.yPos * Math.floor(height / 200)),
              left: Math.min(width - 72, bear.xPos * Math.floor(width / 200)),
            }}
            key={index}
          >
            <img src="/bear.png" alt="a pixel art of a bear" />
          </div>
        );
      })}
    </div>
  );
}

export default BearPage;

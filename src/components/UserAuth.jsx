import React, { useState } from "react";
import SignInForm from "./SignInForm";
import RegisterForm from "./RegisterForm";
function UserAuth() {
  console.log("rendered auth form");

  const [activeLeft, setActiveLeft] = useState(true);
  //login or register
  const toggleChoice = () => {
    setActiveLeft((prev) => !prev);
  };
  return (
    <div>
      <h1 className="text-2xl mt-2 mb-4  underline underline-offset-2">
        Sign in or register
      </h1>
      {/* pill-like button, 2 halves, choosing between login and register, red and green maybe  */}
      <div className="flex flex-row justify-between gap-3 rounded-full h-10 w-50 text-lg bg-gray-800 items-center mx-auto px-2">
        <SignInChoiceButton
          text="login"
          color="green"
          isActive={activeLeft}
          callback={toggleChoice}
        />
        <SignInChoiceButton
          text="register"
          color="red"
          isActive={!activeLeft}
          callback={toggleChoice}
        />
      </div>
      {activeLeft ? <SignInForm /> : <RegisterForm />}
    </div>
  );
}

function SignInChoiceButton({ text, color, callback, isActive = false }) {
  const className =
    (color === "red" ? "bg-red-700" : "bg-green-800") +
    " flex-grow-1 h-8 w-16 transition-all duration-400 rounded-full py-auto border-white border-2 px-1 shadow-md shadow-white/50";
  console.log("rendered sign-in choice button for ", text);

  return (
    <button
      onClick={() => callback()}
      className={
        isActive
          ? className
          : "text-gray-400 py-0.5 px-1 transition-all duration-400 border-none cursor-pointer hover:text-white hover:bg-gray-700 rounded-xl"
      }
    >
      {text}
    </button>
  );
}

export default UserAuth;

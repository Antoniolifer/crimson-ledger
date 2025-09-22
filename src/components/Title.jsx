import React from "react";

function Title({ children }) {
  console.log("rendered title for ", children);

  return (
    <h1 className="text-2xl text-left underline underline-offset-6 mt-2">
      {children}
    </h1>
  );
}

export default Title;

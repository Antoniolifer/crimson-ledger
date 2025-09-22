import React, { useEffect, useRef } from "react";

function FormInput({ value, type, placeholder, onChange, focus = false }) {
  console.log("rendered input for ", placeholder);
  const inputRef = useRef();

  useEffect(() => {
    if (focus) {
      inputRef.current.focus();
    }
  }, [focus]);
  return (
    <input
      ref={inputRef}
      type={type}
      className="bg-white rounded-xl px-2 py-1 text-black border-2 border-black focus:shadow-md focus:shadow-white/50"
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
}

export default FormInput;

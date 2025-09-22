import React, { useState } from "react";
import FormInput from "./FormInput";
import useReviewStore from "../globalStore/reviewStore";

function SignInForm() {
  console.log("rendered sign-in form.");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const loginUser = useReviewStore((state) => state.loginUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      console.log(`We have successfully logged you in, dear ${username}`);
      loginUser({ username, password });
    }, 600);
  };
  return (
    <form
      className="flex flex-col gap-2 p-2 animate-fadein"
      onSubmit={handleSubmit}
    >
      <FormInput
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        focus={focus}
      />
      <FormInput
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-green-800 border-3 border-white shadow-xl shadow-green-600/50 rounded-xl w-20 mx-auto"
      >
        sign in
      </button>
    </form>
  );
}

export default SignInForm;

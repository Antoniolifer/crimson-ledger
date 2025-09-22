import React, { useState } from "react";
import FormInput from "./FormInput";
function RegisterForm() {
  console.log("rendered register form.");

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setTimeout(() => {
      console.log(`We have successfully registered you, dear ${username}`);
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
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <FormInput
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <FormInput
        type="password"
        placeholder="confirm password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button
        type="submit"
        className="bg-red-700 border-3 border-white shadow-xl shadow-red-600/50 rounded-xl w-20 mx-auto"
      >
        register
      </button>
    </form>
  );
}

export default RegisterForm;

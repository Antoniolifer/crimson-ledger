import React from "react";
import Title from "../components/Title";

function AboutPage() {
  return (
    <div className="w-4/5 m-auto text-xl flex gap-6 flex-col items-center">
      <Title>About Crimson Ledger</Title>
      <p>
        Crimson Ledger's mission is to connect players together in a world of
        exploration.
      </p>

      <p>
        On this platform, you can browse, write, rate, and save reviews, as well
        as create a (mock) profile.
      </p>

      <p>This application is responsive, interactive, and performant.</p>

      <p>I hope you will enjoy exploring it.</p>

      <a
        href="https://github.com/Antoniolifer/crimson-ledger"
        className="text-xl bg-red-600/75 w-42 px-2 py-1 rounded-xl border-2 border-white"
      >
        Github Repository
      </a>

      <p className="text-sm text-gray-300 mt-2">
        Developed with React, it uses Tailwind CSS, Zustand, React Router V7,
        local storage, memoization and infinite scroll techniques.
      </p>
      <p className="text-sm text-gray-300">
        My name is Anton Serdiuk, and I am a passionate frontend developer from
        Perth, WA.
      </p>
      <p className="text-sm text-gray-300">My LinkedIn profile:</p>
      <p className="text-sm text-gray-300">September 2025</p>
    </div>
  );
}

export default AboutPage;

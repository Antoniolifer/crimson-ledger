import "./App.css";
import BearPage from "./Pages/BearPage";
import HomePage from "./Pages/HomePage";
import ReviewsPage from "./Pages/ReviewsPage";
import GamesPage from "./Pages/GamesPage";
import AboutPage from "./Pages/AboutPage";
import ProfilePage from "./Pages/ProfilePage";

import Header from "./components/Header";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <BearPage /> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/games" element={<GamesPage />} />
        <Route path="/reviews" element={<ReviewsPage />} />
        <Route path="/profile" element={<ProfilePage />} />

        {/* top secret page  */}
        <Route path="/bears" element={<BearPage />} />

        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default App;

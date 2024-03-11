import React from "react";
import { Route, Routes } from "react-router-dom";
import Quizform from "../components/Quizform";
import Leaderpage from "../pages/Leaderpage";
import Quizpage from "../pages/Quizpage";

const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Quizform />} />
        <Route path="/quiz" element={<Quizpage />} />
        <Route path="/leaderboard" element={<Leaderpage />} />
      </Routes>
    </div>
  );
};

export default Allroutes;

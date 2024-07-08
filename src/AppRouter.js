import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import StudentsPage from "./StudentsPage";
import StaffPage from "./StaffPage";
import CharactersPage from "./CharactersPage";
import FollowingSoon from "./FollowingSoon";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/characters" element={<CharactersPage />} />
      <Route path="/following soon" element={<FollowingSoon />} />
    </Routes>
  );
};

export default AppRouter;

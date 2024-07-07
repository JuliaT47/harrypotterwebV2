import React from "react";
import { Routes, Route } from "react-router-dom";
import MainPage from "./MainPage";
import StudentsPage from "./StudentsPage";
import StaffPage from "./StaffPage";
import CharactersPage from "./CharactersPage";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/students" element={<StudentsPage />} />
      <Route path="/staff" element={<StaffPage />} />
      <Route path="/characters" element={<CharactersPage />} />
    </Routes>
  );
};

export default AppRouter;

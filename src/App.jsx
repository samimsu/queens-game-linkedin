import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GameLevel from "./pages/GameLevel";
import LevelSelection from "./pages/LevelSelection";
import "./App.css";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LevelSelection />} />
        <Route path="/level/:id" element={<GameLevel />} />
      </Routes>
    </Router>
  );
};

export default App;

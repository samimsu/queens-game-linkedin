import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageGameLevel from "./pages/PageGameLevel";
import PageLevelSelection from "./pages/PageLevelSelection";
import "./App.css";
import PageLevelBuilder from "./pages/PageLevelBuilder";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLevelSelection />} />
        <Route path="/level/:id" element={<PageGameLevel />} />
        <Route path="/level-builder" element={<PageLevelBuilder />} />
      </Routes>
    </Router>
  );
};

export default App;

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageGameLevel from "./pages/PageGameLevel";
import PageLevelSelection from "./pages/PageLevelSelection";
import PageLevelBuilder from "./pages/PageLevelBuilder";
import PageNotFound from "./pages/PageNotFound";
import "./App.css";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "next-themes";
import ThemeSwitcher from "./components/ThemeSwitcher"

const App = () => {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <Router>
        <Routes>
          <Route path="/" element={<PageLevelSelection />} />
          <Route path="/level/:id" element={<PageGameLevel />} />
          <Route path="/level-builder" element={<PageLevelBuilder />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </Router>
      <ThemeSwitcher />
    </ThemeProvider>
  );
};

export default App;

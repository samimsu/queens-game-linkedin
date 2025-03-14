import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "next-themes";
import PageGameLevel from "./pages/PageGameLevel";
import PageLevelSelection from "./pages/PageLevelSelection";
import PageLevelBuilder from "./pages/PageLevelBuilder";
import PageNotFound from "./pages/PageNotFound";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";
import "./i18n"

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

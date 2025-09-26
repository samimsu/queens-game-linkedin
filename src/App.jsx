import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from '@dr.pogodin/react-helmet';
import { ThemeProvider } from "next-themes";
import PageGameLevel from "./pages/PageGameLevel";
import PageLevelSelection from "./pages/PageLevelSelection";
import PageBonusLevelsList from "./pages/PageBonusLevelsList";
import PageBonusLevel from "./pages/PageBonusLevel";
import PageCommunityLevelsList from "./pages/PageCommunityLevelsList";
import PageCommunityLevel from "./pages/PageCommunityLevel";
import PageLevelBuilder from "./pages/PageLevelBuilder";
import PageNotFound from "./pages/PageNotFound";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";
import "./i18n";
import PageGeneratedLevelSizeSelection from "@/pages/PageGeneratedLevelSizeSelection";
import PageGeneratedLevel from "@/pages/PageGeneratedLevel";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <Router>
          <Routes>
            <Route path="/" element={<PageLevelSelection />} />
            <Route path="/level/:id" element={<PageGameLevel />} />
            <Route path="/bonus-levels" element={<PageBonusLevelsList />} />
            <Route path="/bonus-level/:id" element={<PageBonusLevel />} />
            <Route
              path="/community-levels"
              element={<PageCommunityLevelsList />}
            />
            <Route
              path="/community-level/:id"
              element={<PageCommunityLevel />}
            />
            <Route path="/level-builder" element={<PageLevelBuilder />} />
            <Route path="/random-level" element={<PageGeneratedLevelSizeSelection />} />
            <Route path="/random-level/:id" element={<PageGeneratedLevel />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </Router>
        <ThemeSwitcher />
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;

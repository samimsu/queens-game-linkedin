import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ThemeProvider } from "next-themes";
import { PaletteProvider } from "./context/PaletteContext";
import PageCommunityLevelsList from "./pages/PageCommunityLevelsList";
import PageCommunityLevel from "./pages/PageCommunityLevel";
import PageLevelBuilder from "./pages/PageLevelBuilder";
import PagePaletteSettings from "./pages/PagePaletteSettings";
import PageNotFound from "./pages/PageNotFound";
import ThemeSwitcher from "./components/ThemeSwitcher";
import "./App.css";
import "./i18n";

const App = () => {
  return (
    <HelmetProvider>
      <ThemeProvider attribute="class" defaultTheme="light">
        <PaletteProvider>
          <Router>
            <Routes>
              <Route path="/" element={<PageCommunityLevelsList />} />
              <Route
                path="/community-levels"
                element={<PageCommunityLevelsList />}
              />
              <Route
                path="/community-level/:id"
                element={<PageCommunityLevel />}
              />
              <Route path="/level-builder" element={<PageLevelBuilder />} />
              <Route
                path="/settings/palette"
                element={<PagePaletteSettings />}
              />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
          <ThemeSwitcher />
        </PaletteProvider>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;

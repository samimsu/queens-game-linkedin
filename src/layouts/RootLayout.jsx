import React from "react";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full overflow-clip p-4">
      <div className="flex-1 min-h-screen mb-3">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;

import React from "react";
import Footer from "../components/Footer";

const RootLayout = ({ children }) => {
  return (
    <div className="flex flex-col h-full overflow-clip py-4">
      <div className="flex-1 min-h-[700px] mb-3 pb-16">{children}</div>
      <Footer />
    </div>
  );
};

export default RootLayout;

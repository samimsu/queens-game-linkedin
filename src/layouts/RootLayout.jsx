import React from "react";
import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";

const RootLayout = ({ children, className = "" }) => {
  return (
    <div
      className={`flex flex-col h-full overflow-clip py-4 min-h-screen ${className}`}
    >
      <div className="flex-1 min-h-[300px] mb-3 pb-16 mx-auto">{children}</div>
      <Footer />
      <Analytics />
    </div>
  );
};

export default RootLayout;

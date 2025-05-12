import Footer from "../components/Footer";
import { Analytics } from "@vercel/analytics/react";
import Navbar from "@/components/Navbar";

interface RootLayoutProps {
  children: React.ReactNode;
  className?: string;
}

const RootLayout = ({ children, className = "" }: RootLayoutProps) => {
  return (
    <div
      className={`flex flex-col h-full overflow-clip pb-4 min-h-screen ${className}`}
    >
      <Navbar />
      <div className="flex-1 min-h-[300px] mb-3 pb-16 mx-auto">{children}</div>
      <Footer />
      <Analytics />
    </div>
  );
};

export default RootLayout;

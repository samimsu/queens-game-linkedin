import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import RootLayout from "@/layouts/RootLayout";

const PageNotFound = () => {
  return (
    <RootLayout>
      <div className="flex flex-col items-center justify-center pt-24 text-center">
        <h1 className="text-4xl font-bold text-primary">
          404 - Page Not Found
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Oops! The page you’re looking for doesn’t exist.
        </p>
        <Link to="/" className="mt-6">
          <Button className="hover:bg-primary hover:opacity-90">Go home</Button>
        </Link>
      </div>
    </RootLayout>
  );
};

export default PageNotFound;

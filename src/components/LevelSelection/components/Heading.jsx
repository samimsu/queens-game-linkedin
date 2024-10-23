import React from "react";
import queensLogo from "../../../assets/queens_game_logo.jpeg";

const Heading = () => {
  return (
    <div className="flex items-center space-x-3 mt-4 mb-6">
      <img src={queensLogo} width={32} height={32} alt="Queens Logo" />
      <h1 className="text-2xl">
        <a
          href="https://github.com/samimsu/queens-game-linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-700 font-medium hover:underline"
        >
          Queens
        </a>
      </h1>
    </div>
  );
};

export default Heading;

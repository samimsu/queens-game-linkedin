import React from "react";
import Queen from "./Queen";

const HowToPlay = () => {
  return (
    <div className="self-start mt-6 mb-16 max-w-md md:max-w-lg mx-2">
      <div className="font-medium mb-3">How to play</div>
      <ol className="list-decimal space-y-2">
        <li className="ml-4">
          Your goal is to have <b className="font-medium">exactly one</b>
          <Queen size="20" className="inline mx-1 mb-1" />
          in each <b className="font-medium">row, column, and color region.</b>
        </li>
        <li className="ml-4">
          Tap once to place X and tap twice for
          <Queen size="20" className="inline mx-1 mb-1" />. Use X to mark where
          <Queen size="20" className="inline mx-1 mb-1" />
          cannot be placed.
        </li>
        <li className="ml-4">
          Two
          <Queen size="20" className="inline mx-1 mb-1" />
          cannot touch each other, not even diagonally.
        </li>
      </ol>
    </div>
  );
};

export default HowToPlay;

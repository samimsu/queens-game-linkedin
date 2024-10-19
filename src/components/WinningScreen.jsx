import React from "react";
import goldCrown from "../assets/gold-crown.svg";
import CloseIcon from "./icons/CloseIcon";

const WinningScreen = ({ PreviousLevelButton, NextLevelButton, close }) => {
  return (
    <div className="absolute flex flex-col items-center justify-center text-center rounded-lg bg-purple text-white text-xl w-72 h-72 font-bold p-2 select-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <button className="absolute right-3 top-3" onClick={close}>
        <CloseIcon />
      </button>
      <img src={goldCrown} alt="Crown" className="align-items-center mb-3" />
      <div className="text-2xl mb-6">You Win!</div>
      <div className="flex flex-col space-y-3">
        <PreviousLevelButton
          className={`rounded border px-3 py-1 w-full border-white disabled:border-white/50 disabled:text-white/50`}
        >
          Previous Level
        </PreviousLevelButton>
        <NextLevelButton className="rounded border px-3 py-1 w-full border-white disabled:border-white/50 disabled:text-white/50">
          Next Level
        </NextLevelButton>
      </div>
    </div>
  );
};

export default WinningScreen;

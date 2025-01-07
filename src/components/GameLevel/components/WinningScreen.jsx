import React from "react";
import goldCrown from "../../../assets/gold-crown.svg";
import CloseIcon from "../../icons/CloseIcon";
import formatDuration from "@/utils/formatDuration";
import goldenChicletBg from "@/assets/golden-chiclet-bg.svg";

const WinningScreen = ({
  timer,
  PreviousLevelButton,
  NextLevelButton,
  close,
}) => {
  return (
    <div
      className={`absolute flex flex-col items-center justify-center text-center rounded-lg bg-purple text-white text-xl w-72 ${
        timer ? "h-80" : "h-72"
      } max-h-full max-w-full font-bold p-2 select-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10`}
    >
      <button className="absolute right-3 top-3" onClick={close}>
        <CloseIcon />
      </button>
      <img
        src={goldCrown}
        alt="Crown"
        className={`align-items-center ${timer ? "mb-1" : "mb-3"}`}
        width={`${timer ? "52" : "64"}`}
        height={`${timer ? "52" : "64"}`}
      />
      <div className={`${timer ? "text-xl mb-3" : "text-2xl mb-6"}`}>
        You Win!
      </div>

      <div className="flex flex-col space-y-3">
        {timer > 0 && (
          <div className="relative flex justify-center">
            <img
              src={goldenChicletBg}
              alt="Golden chiclet background"
              className="rounded w-full h-16 object-cover"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-foreground">
              <div className="text-lg">{formatDuration(timer)}</div>
              <div className="font-medium text-sm">Solve time</div>
            </div>
          </div>
        )}
        <PreviousLevelButton
          className={`${
            timer ? "text-lg" : "text-xl"
          } rounded border px-3 py-1 w-full border-white disabled:border-white/50 disabled:text-white/50`}
        >
          Previous Level
        </PreviousLevelButton>
        <NextLevelButton
          className={`${
            timer ? "text-lg" : "text-xl"
          } rounded border px-3 py-1 w-full border-white disabled:border-white/50 disabled:text-white/50`}
        >
          Next Level
        </NextLevelButton>
      </div>
    </div>
  );
};

export default WinningScreen;

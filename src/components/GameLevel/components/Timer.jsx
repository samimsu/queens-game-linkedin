import ClockIcon from "@/components/icons/ClockIcon";
import React, { useState, useEffect } from "react";
import formatDuration from "@/utils/formatDuration";

const ONE_HOUR_IN_SECONDS = 3600;
const TEN_HOURS_IN_SECONDS = 36000;

const Timer = ({ run, onTimeUpdate, showTimer, initialTimer, className = "" }) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval = null;
    if (run) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newTime = prevSeconds + 1;
          return newTime;
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [run]);

  useEffect(() => {
    onTimeUpdate(seconds);
  }, [seconds]);

  useEffect(() => {
    setSeconds(initialTimer || 0);
  }, [initialTimer]);

  if (!showTimer) {
    return <></>;
  }

  return (
    <div className={`flex items-center space-x-1 font-medium ${className}`}>
      <ClockIcon />
      <span
        className={`${
          seconds < ONE_HOUR_IN_SECONDS
            ? "w-10"
            : seconds < TEN_HOURS_IN_SECONDS
              ? "w-14"
              : "w-full"
        }`}
      >
        {formatDuration(seconds)}
      </span>
    </div>
  );
};

export default Timer;

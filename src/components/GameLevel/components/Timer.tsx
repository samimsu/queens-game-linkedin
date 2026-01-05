import { useState, useEffect } from "react";
import ClockIcon from "@/components/icons/ClockIcon";
import formatDuration from "@/utils/formatDuration";

const ONE_HOUR_IN_SECONDS = 3600;
const TEN_HOURS_IN_SECONDS = 36000;

interface TimerProps {
  run: boolean;
  onTimeUpdate: (time: number) => void;
  showTimer: boolean;
  className?: string;
}

const Timer = ({
  run,
  onTimeUpdate,
  showTimer,
  className = "",
}: TimerProps) => {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;
    if (run) {
      interval = setInterval(() => {
        setSeconds((prevSeconds) => {
          const newTime = prevSeconds + 1;
          return newTime;
        });
      }, 1000);
    } else {
      if (interval) clearInterval(interval);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [run]);

  useEffect(() => {
    onTimeUpdate(seconds);
  }, [seconds]);

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

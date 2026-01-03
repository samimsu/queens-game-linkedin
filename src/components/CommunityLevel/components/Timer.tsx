import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import ClockIcon from "@/components/icons/ClockIcon";
import formatDuration from "@/utils/formatDuration";

const ONE_HOUR_IN_SECONDS = 3600;
const TEN_HOURS_IN_SECONDS = 36000;

interface TimeRecords {
  first?: number;
  best?: number;
  last?: number;
}

interface TimerProps {
  run: boolean;
  onTimeUpdate: (time: number) => void;
  showTimer: boolean;
  timeRecords?: TimeRecords;
  className?: string;
}

const Timer = ({
  run,
  onTimeUpdate,
  showTimer,
  timeRecords,
  className = "",
}: TimerProps) => {
  const { t } = useTranslation();
  const [seconds, setSeconds] = useState(0);

  // Reset seconds when component remounts (key changes)
  useEffect(() => {
    setSeconds(0);
  }, []);

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
    <div className={`flex items-center justify-between w-full ${className}`}>
      {timeRecords && (
        <div className="flex items-center space-x-3">
          <div className="flex items-center space-x-1 font-medium text-sm">
            <span>{t("FIRST_TIME")}:</span>
            <span>
              {timeRecords.first !== undefined
                ? formatDuration(timeRecords.first)
                : "∞"}
            </span>
          </div>
          <div className="flex items-center space-x-1 font-medium text-sm">
            <span>{t("BEST_TIME")}:</span>
            <span>
              {timeRecords.best !== undefined
                ? formatDuration(timeRecords.best)
                : "∞"}
            </span>
          </div>
          <div className="flex items-center space-x-1 font-medium text-sm">
            <span>{t("LAST_TIME")}:</span>
            <span>
              {timeRecords.last !== undefined
                ? formatDuration(timeRecords.last)
                : "∞"}
            </span>
          </div>
        </div>
      )}
      <div className="flex items-center space-x-1 font-medium">
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
    </div>
  );
};

export default Timer;

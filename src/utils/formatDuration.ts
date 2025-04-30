import { intervalToDuration } from "date-fns";

const formatDuration = (seconds: number) => {
  const duration = intervalToDuration({ start: 0, end: seconds * 1000 });

  const zeroPad = (num: number) => String(num).padStart(2, "0");

  if (duration.days) {
    return "> 1 day";
  }

  if (duration.hours) {
    return `${duration.hours}:${zeroPad(duration.minutes || 0)}:${zeroPad(
      duration.seconds || 0
    )}`;
  } else {
    return `${duration.minutes || 0}:${zeroPad(duration.seconds || 0)}`;
  }
};

export default formatDuration;

import {
  addDays,
  addHours,
  addMinutes,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { ReactNode, useEffect, useState } from "react";

type Props = {
  untilDate: Date;
  fallback: ReactNode;
};

type DateDiff = {
  days: number;
  hours: number;
  min: number;
  sec: number;
};

const getDiff = (until: Date): DateDiff | null => {
  let now = new Date();
  const daysDiff = Math.floor(differenceInDays(until, now));
  now = addDays(now, daysDiff);
  const hoursDiff = Math.floor(differenceInHours(until, now));
  now = addHours(now, hoursDiff);
  const minDiff = Math.floor(differenceInMinutes(until, now));
  now = addMinutes(now, minDiff);
  const secDiff = Math.floor(differenceInSeconds(until, now));
  const diff = {
    days: daysDiff,
    hours: hoursDiff,
    min: minDiff,
    sec: secDiff,
  };
  const isPast = Object.values(diff).some((n) => n < 0);
  return isPast ? null : diff;
};

const CountDown = (props: Props) => {
  const { untilDate, fallback } = props;
  const [, setNonce] = useState(0);
  const diff = getDiff(untilDate);
  useEffect(() => {
    const iv = setInterval(() => {
      setNonce((n) => n + 1);
    }, 1e3);
    return () => clearInterval(iv);
  }, []);
  if (!diff) {
    return <>{fallback}</>;
  }
  return <>{`${diff.days} days + ${diff.hours}h ${diff.min}min ${diff.sec}s`}</>;
};

export default CountDown;

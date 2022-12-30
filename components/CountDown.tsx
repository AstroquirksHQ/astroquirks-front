import {
  addDays,
  addHours,
  addMinutes,
  differenceInDays,
  differenceInHours,
  differenceInMinutes,
  differenceInSeconds,
} from "date-fns";
import { useEffect, useState } from "react";

type Props = {
  untilDate: Date;
};

type DateDiff = {
  days: number;
  hours: number;
  min: number;
  sec: number;
};

const getDiff = (until: Date): DateDiff => {
  let now = new Date();
  const daysDiff = Math.floor(differenceInDays(until, now));
  now = addDays(now, daysDiff);
  const hoursDiff = Math.floor(differenceInHours(until, now));
  now = addHours(now, hoursDiff);
  const minDiff = Math.floor(differenceInMinutes(until, now));
  now = addMinutes(now, minDiff);
  const secDiff = Math.floor(differenceInSeconds(until, now));
  return {
    days: daysDiff,
    hours: hoursDiff,
    min: minDiff,
    sec: secDiff,
  };
};

const CountDown = (props: Props) => {
  const { untilDate } = props;
  const [, setNonce] = useState(0);
  const diff = getDiff(untilDate);
  useEffect(() => {
    const iv = setInterval(() => {
      setNonce((n) => n + 1);
    }, 1e3);
    return () => clearInterval(iv);
  }, []);
  return <span>{`${diff.days} days + ${diff.hours}h ${diff.min}min ${diff.sec}s`}</span>;
};

export default CountDown;

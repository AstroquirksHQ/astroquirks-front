import BigNumber from "bignumber.js";
import { format, isBefore } from "date-fns";
import { ReactNode, useMemo } from "react";
import { FiChevronsDown, FiExternalLink } from "react-icons/fi";
import { useQuery } from "react-query";

import { fetchRewards, QuirkReward } from "../client-api";
import Collapse from "./Collapse";
import CurrencyIcon from "./CurrencyIcon";
import DistributionPie from "./DistributionPie";
import NextAirdropCounter from "./NextAirdropCounter";
import OnlyWeb from "./OnlyWeb";

type TimelineBaseEvent = {
  id: string;
  date: Date;
  tx_hash?: string;
};

type TimelineRewardEvent = TimelineBaseEvent & {
  type: "REWARD";
  reward: QuirkReward;
};

type TimelineCustomEvent = TimelineBaseEvent & {
  type: "CUSTOM";
  desc: string;
};

type TimelineEvent = TimelineRewardEvent | TimelineCustomEvent;

const EventContainer = ({
  event,
  isFirst,
  isLast,
  children,
}: {
  event: TimelineEvent;
  children: ReactNode;
  isFirst: boolean;
  isLast: boolean;
}) => {
  const url = event.tx_hash ? `https://www.mintscan.io/osmosis/txs/${event.tx_hash}` : null;
  return (
    <div className={`${isFirst ? "" : "pt-8"} relative`}>
      <div className="pb-4 opacity-50">
        <>{format(event.date, "PPP")}</>
      </div>
      <div className="absolute top-0 bottom-0 right-full mr-3 sm:mr-8 opacity-10">
        <div
          className={`bg-blue-4 w-[4px] absolute bottom-0 ${isFirst ? "top-8" : "top-0"} ${
            isLast ? "bottom-auto h-16" : ""
          } left-[18px]`}
        ></div>
        <div
          className={`relative bg-blue-4 w-[40px] h-[40px] rounded-full shadow-lg border border-blue-2 ${
            isFirst ? "-mt-2" : "mt-6"
          }`}
        >
          <div className="absolute w-[30px] h-[30px] top-[4px] opacity-50 left-[4px] rounded-full bg-blue-2 z-10"></div>
          <div className="absolute w-[20px] h-[20px] top-[9px] left-[9px] rounded-full bg-blue-2 z-10"></div>
        </div>
      </div>
      <div className="bg-blue-1 bg-opacity-30 w-[300px] sm:w-[500px] border border-blue-1 shadow-lg p-8 rounded relative">
        {event.type === "REWARD" && (
          <div className="uppercase text-blue-2 tracking-widest select-none absolute top-2 left-3 opacity-40 font-semibold flex items-center space-x-2">
            <FiChevronsDown />
            <span>{"Airdrop"}</span>
          </div>
        )}
        {url && (
          <div className="absolute top-1 right-1 text-sm">
            <a
              target="_blank"
              rel="noreferrer noopener"
              className="inline-flex space-x-2 items-center text-orange-1 opacity-50 hover:opacity-100"
              href={url}
            >
              <span>{"See in explorer"}</span>
              <FiExternalLink />
            </a>
          </div>
        )}
        {children}
      </div>
    </div>
  );
};

const useBuildEvents = ({ rewards }: { rewards: QuirkReward[] }): TimelineEvent[] => {
  const events = useMemo<TimelineEvent[]>(() => {
    const events: TimelineEvent[] = [
      ...rewards.map(
        (reward): TimelineRewardEvent => ({
          type: "REWARD",
          id: `REWARD_${reward.date}_${reward.tx_hash || "NOHASH"}`,
          date: new Date(reward.date),
          ...(reward.tx_hash ? { tx_hash: reward.tx_hash } : {}),
          reward,
        }),
      ),
    ];
    const creationEvent: TimelineCustomEvent = {
      id: "creation",
      type: "CUSTOM",
      date: new Date("2022-11-06 00:13:50"),
      desc: "Astroquirks validator is up!",
      tx_hash: "7ADEF865AAFEB7B55A05E4B7CC54F72FEE1496E80C0DA56463483E35FE7781B9",
    };
    events.push(creationEvent);
    return events;
  }, [rewards]);

  return events;
};

const DropsTimeline = () => {
  const { data } = useQuery("rewards", fetchRewards, { suspense: true });
  const rewards = data?.quirk_rewards!;

  const events = useBuildEvents({ rewards });

  return (
    <div className="flex flex-col ml-6 sm:ml-0 sm:items-center text-left">
      {events.map((event, i) => {
        const isPast = isBefore(event.date, new Date());
        const isFirst = i === 0;
        const isLast = i === events.length - 1;

        if (event.type === "REWARD") {
          const { reward } = event;
          const amount = BigNumber(reward.amount);

          return (
            <EventContainer key={event.id} event={event} isFirst={isFirst} isLast={isLast}>
              {isPast ? (
                <div className="relative">
                  <div className="absolute left-6 top-[55px]">
                    <CurrencyIcon className="max-h-[50px] max-w-[50px]" ticker={reward.currency} />
                  </div>
                  <div className="py-8">
                    <div className="text-center mb-14">
                      <div className="font-bold text-2xl">
                        <span className="opacity-30 select-none">{"~ "}</span>
                        {`${amount.toFixed(0)} `}
                        <span className="opacity-70">{reward.currency}</span>
                      </div>
                      <div className="opacity-50">{`swapped from ~${BigNumber(
                        reward.commission.amount,
                      ).toFixed(0)} ${reward.commission.currency}`}</div>
                      <div>
                        {`sent to `}
                        <strong>
                          <span>{reward.snapshot.data.length}</span>
                        </strong>
                        {` addresses`}
                      </div>
                    </div>
                  </div>
                  <div className="-m-8">
                    <Collapse
                      labelClosed={"Show distribution by address"}
                      labelOpened={"Hide distribution by address"}
                    >
                      <div className="h-[300px]">
                        <DistributionPie snapshot={reward.snapshot} />
                      </div>
                    </Collapse>
                  </div>
                </div>
              ) : (
                <div className="text-center">
                  <strong className="text-orange-1 relative z-10">{"Incoming airdrop!"}</strong>
                  <div className="my-8">
                    <span className="bg-blue-5 p-4 rounded-xl bg-opacity-40 text-[#fff] font-bold border border-blue-2 border-opacity-10 shadow-lg">
                      <OnlyWeb>
                        <NextAirdropCounter />
                      </OnlyWeb>
                    </span>
                  </div>
                </div>
              )}
            </EventContainer>
          );
        }

        return (
          <EventContainer key={event.id} event={event} isFirst={isFirst} isLast={isLast}>
            <div className="text-center py-8">{event.desc}</div>
          </EventContainer>
        );
      })}
    </div>
  );
};

export default DropsTimeline;

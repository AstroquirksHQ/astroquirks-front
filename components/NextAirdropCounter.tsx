import { useQuery } from "react-query";

import CountDown from "./CountDown";

const URL = "https://cdn.jsdelivr.net/gh/AstroquirksHQ/quirky_rewards/data.json";

type QuirkReward = {
  date: string;
  tx_hash: string | null;
  currency: string;
  commission: {
    amount: number;
    currency: string;
  };
  amount: string;
  snapshot: QuirkRewardSnapshot;
};

type QuirkRewardSnapshotItem = {
  address: "osmo17vz8hvg96lddwawdfygvu89ua4v7qgd6p3m9ry";
  amount: string;
  share: string;
  restaked: string;
};

type QuirkRewardSnapshot = {
  block_height: number;
  data: QuirkRewardSnapshotItem[];
};

type RewardsQueryResponse = {
  quirk_rewards: QuirkReward[];
};

const NextAirdropCounter = () => {
  const rewardsQuery = useQuery("rewards", async () => {
    const res = (await fetch(URL).then((r) => r.json())) as RewardsQueryResponse;
    return res;
  });
  if (rewardsQuery.isLoading) return <>{"..."}</>;
  if (rewardsQuery.error) return <>{"... error?"}</>;
  if (!rewardsQuery.data) return null;
  const nextAirdrop = rewardsQuery.data.quirk_rewards[0];
  if (!nextAirdrop) return null;
  return <CountDown untilDate={new Date(nextAirdrop.date)} />;
};

export default NextAirdropCounter;

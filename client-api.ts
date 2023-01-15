const REWARDS_URL = "https://cdn.jsdelivr.net/gh/AstroquirksHQ/quirky_rewards/data.json";

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

type RewardsQueryResponse = {
  quirk_rewards: QuirkReward[];
};

export const fetchRewards = async (): Promise<RewardsQueryResponse> => {
  const res = (await fetch(REWARDS_URL).then((r) => r.json())) as RewardsQueryResponse;
  return res;
};

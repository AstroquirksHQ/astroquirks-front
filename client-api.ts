const REWARDS_URL = "https://cdn.jsdelivr.net/gh/AstroquirksHQ/quirky_rewards/data.json";

type QuirkRewardSnapshotItem = {
  address: string;
  amount: string;
  share: string;
  restaked: string;
};

export type QuirkRewardSnapshot = {
  block_height: number;
  data: QuirkRewardSnapshotItem[];
};

export type QuirkReward = {
  date: string;
  tx_hash: string | null;
  currency: string;
  commission: {
    amount: number;
    currency: string;
  };
  amount: number;
  snapshot: QuirkRewardSnapshot;
};

type RewardsQueryResponse = {
  quirk_rewards: QuirkReward[];
};

export const fetchRewards = async (): Promise<RewardsQueryResponse> => {
  const res = (await fetch(REWARDS_URL).then((r) => r.json())) as RewardsQueryResponse;
  return res;
};

import { useQuery } from "react-query";

import { fetchRewards } from "../client-api";
import CoinsDrop from "./CoinsDrop";
import CountDown from "./CountDown";

const NextAirdropCounter = () => {
  const rewardsQuery = useQuery("rewards", fetchRewards);
  if (rewardsQuery.isLoading) return <>{"..."}</>;
  if (rewardsQuery.error) return <>{"... error?"}</>;
  if (!rewardsQuery.data) return null;
  const nextAirdrop = rewardsQuery.data.quirk_rewards[0];
  if (!nextAirdrop) return null;
  const date = new Date(nextAirdrop.date);
  const fallback = (
    <div className="inline-flex relative">
      <CoinsDrop />
      <span className="relative">{"in progress..."}</span>
    </div>
  );
  return <CountDown fallback={fallback} untilDate={date} />;
};

export default NextAirdropCounter;

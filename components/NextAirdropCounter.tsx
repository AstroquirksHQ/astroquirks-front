import { useQuery } from "react-query";

import { fetchRewards } from "../client-api";
import CountDown from "./CountDown";

const NextAirdropCounter = () => {
  const rewardsQuery = useQuery("rewards", fetchRewards);
  if (rewardsQuery.isLoading) return <>{"..."}</>;
  if (rewardsQuery.error) return <>{"... error?"}</>;
  if (!rewardsQuery.data) return null;
  const nextAirdrop = rewardsQuery.data.quirk_rewards[0];
  if (!nextAirdrop) return null;
  return <CountDown untilDate={new Date(nextAirdrop.date)} />;
};

export default NextAirdropCounter;

import { useWallet } from "@cosmos-kit/react";
import { useEffect } from "react";

import DApp from "@/components/DApp";
import DAppLanding from "@/components/DAppLanding";
import WalletProvider from "@/components/WalletProvider";

const DAppWrapper = () => {
  const wallet = useWallet();
  const { setCurrentChain } = wallet;
  const { data: account } = wallet;

  useEffect(() => {
    setCurrentChain("osmosis");
  }, [setCurrentChain]);

  return account ? <DApp /> : <DAppLanding />;
};

export default () => (
  <WalletProvider>
    <DAppWrapper />
  </WalletProvider>
);

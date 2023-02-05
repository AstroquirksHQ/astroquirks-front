import { useWallet } from "@cosmos-kit/react";
import { useEffect } from "react";

import DAppLanding from "@/components/DAppLanding";
import Multisig from "@/components/Multisig";
import WalletProvider from "@/components/WalletProvider";

const MultisigWrapper = () => {
  const wallet = useWallet();
  const { setCurrentChain } = wallet;
  const { data: account } = wallet;

  useEffect(() => {
    setCurrentChain("osmosis");
  }, [setCurrentChain]);

  return account ? <Multisig /> : <DAppLanding />;
};

export default () => (
  <WalletProvider>
    <MultisigWrapper />
  </WalletProvider>
);

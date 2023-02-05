import { useWallet } from "@cosmos-kit/react";
import { useEffect } from "react";

import DApp from "../components/DApp";
import Landing from "../components/Landing";
import WalletProvider from "../components/WalletProvider";

const Home = () => {
  const wallet = useWallet();
  const { setCurrentChain } = wallet;

  const isLoggedIn = !!wallet.data;

  useEffect(() => {
    setCurrentChain("osmosis");
  }, [setCurrentChain]);

  return (
    <>
      <Landing show={!isLoggedIn} />
      <DApp />
    </>
  );
};

const Wrapped = () => {
  return (
    <WalletProvider>
      <Home />
    </WalletProvider>
  );
};

export default Wrapped;

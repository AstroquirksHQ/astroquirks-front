import { wallets } from "@cosmos-kit/keplr";
import { useWallet } from "@cosmos-kit/react";
import { WalletProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import Image from "next/image";
import { useEffect } from "react";

import Button, { Props as ButtonProps } from "../components/Button";
import DApp from "../components/DApp";
import Landing from "../components/Landing";
import Logo from "../components/Logo";

const Home = () => {
  const wallet = useWallet();
  const { setCurrentChain } = wallet;

  const isLoggedIn = !!wallet.data;

  useEffect(() => {
    setCurrentChain("osmosis");
  }, [setCurrentChain]);

  return (
    <WalletProvider
      chains={chains}
      assetLists={assets}
      // @ts-expect-error
      wallets={wallets}
    >
      <div className="px-8 pt-8 mb-4 flex-col items-center md:flex-row space-y-6 md:space-y-0 flex justify-between">
        <Logo />
        {isLoggedIn ? (
          <Button onClick={wallet.disconnect}>{"Log-out"}</Button>
        ) : (
          <LoginButton onClick={wallet.connect} />
        )}
      </div>
      <DApp />
      <Landing show={!isLoggedIn} />
    </WalletProvider>
  );
};

const LoginButton = (props: ButtonProps) => (
  <Button {...props}>
    <div className="flex items-center space-x-2">
      <Image className="-ml-1" alt="keplr" src="/img/keplr-logo.png" width={16} height={16} />
      <span>{"Log-in with Keplr"}</span>
    </div>
  </Button>
);

const Wrapped = () => {
  return (
    <WalletProvider
      chains={chains} // supported chains
      assetLists={assets} // supported asset lists
      // @ts-expect-error
      wallets={wallets} // supported wallets
    >
      <Home />
    </WalletProvider>
  );
};

export default Wrapped;

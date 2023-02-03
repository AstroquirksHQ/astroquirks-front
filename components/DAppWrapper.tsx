import { wallets } from "@cosmos-kit/keplr";
import { WalletProvider } from "@cosmos-kit/react";
import { chains, assets } from "chain-registry";
import { ReactNode } from "react";

const DAppWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <WalletProvider
      chains={chains} // supported chains
      assetLists={assets} // supported asset lists
      // @ts-expect-error
      wallets={wallets} // supported wallets
    >
      {children}
    </WalletProvider>
  );
};

export default DAppWrapper;
